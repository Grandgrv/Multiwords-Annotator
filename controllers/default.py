# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is a sample controller
## - index is the default action of any application
## - user is required for authentication and authorization
## - download is for downloading files uploaded in the db (does streaming)
## - call exposes all registered services (none by default)
#########################################################################
import os
import subprocess
@auth.requires_login()
def index():
    """
    example action using the internationalization operator T and flash
    rendered by views/default/index.html or views/generic.html

    if you need a simple wiki simple replace the two lines below with:
    return auth.wiki()
    """
    if(auth.user.id==1):
        redirect(URL('uploading'))
    else:
        redirect(URL('homepage'))


def user():
    """
    exposes:
    http://..../[app]/default/user/login
    http://..../[app]/default/user/logout
    http://..../[app]/default/user/register
    http://..../[app]/default/user/profile
    http://..../[app]/default/user/retrieve_password
    http://..../[app]/default/user/change_password
    http://..../[app]/default/user/manage_users (requires membership in 
    use @auth.requires_login()
        @auth.requires_membership('group name')
        @auth.requires_permission('read','table name',record_id)
    to decorate functions that need access control
    """
    auth.settings.formstyle = 'divs'
    return dict(form=auth())

#@cache.action()
def download():
    """
    allows downloading of uploaded files
    http://..../[app]/default/download/[filename]
    """
    return response.download(request, db)


def call():
    """
    exposes services. for example:
    http://..../[app]/default/call/jsonrpc
    decorate with @services.jsonrpc the functions to expose
    supports xml, json, xmlrpc, jsonrpc, amfrpc, rss, csv
    """
    return service()


@auth.requires_signature()
def data():
    """
    http://..../[app]/default/data/tables
    http://..../[app]/default/data/create/[table]
    http://..../[app]/default/data/read/[table]/[id]
    http://..../[app]/default/data/update/[table]/[id]
    http://..../[app]/default/data/delete/[table]/[id]
    http://..../[app]/default/data/select/[table]
    http://..../[app]/default/data/search/[table]
    but URLs must be signed, i.e. linked with
      A('table',_href=URL('data/tables',user_signature=True))
    or with the signed load operator
      LOAD('default','data.load',args='tables',ajax=True,user_signature=True)
    """
    return dict(form=crud())
    
    
from collections import deque
import re    
from shutil import copyfileobj   
    
@auth.requires_membership('Administrator')
def uploading():
    form = SQLFORM(db.Uploads,deletable=True,
                  upload=URL('download'),fields=['name', 'file_upload'])
    if request.vars.file_upload!=None:
        form.vars.file_filename = request.vars.file_upload.filename
    if form.process().accepted:
        pmc=form.vars.name
        pmd=form.vars.file_upload
        pml=form.vars.id
        cwd=os.getcwd()
        appname = request.application
        cwd=cwd+'/applications/' + appname + '/uploads'
        tempcwd = cwd + '/tempfile'
        file=os.path.join(cwd,pmd)
        
        ssf=pmc+"(ssf)"
        db(db.Uploads.name==pmc).update(ssf_saved_name=ssf)
        ssf=os.path.join(cwd,ssf)
        cwd=os.path.join(cwd,pmc)
        
        ssf_target=open(ssf,'a')
        cmd=['shallow_parser_hin',file]
        process=subprocess.Popen(cmd,stdout=subprocess.PIPE)
        process.wait()
        for line in process.stdout:
            ssf_target.write(line)
            
        ssf_target.close()    
        

        f=open(cwd,'w') #open/create file1
        f.close()
        
        with open(tempcwd, 'w') as f: # write file2
            text="<"+pmc+">\n"
            f.write(text)

        # append file2 to file1
        with open(tempcwd, 'rb') as input_file, open(cwd, 'ab') as output_file:
            copyfileobj(input_file, output_file)
            
        os.remove(tempcwd)
        db(db.Uploads.name==pmc).update(saved_name=pmd)
        
        db(db.Uploads.name==pmc).update(check_file=0)
        db(db.Uploads.name==pmc).update(output_file=pmc)
        response.flash = 'form accepted'
    elif form.errors:
        response.flash = 'form has errors'
            
    return dict(form=form)

@auth.requires_membership('Administrator')
def extracting_words():
   
   heya=db.Uploads(request.args(0))
   #input_file='/home/gaurav/web2py/applications/Jump/uploads/'+ heya.ssf_saved_name
   cwd=os.getcwd()
   appname = request.application
   cwd=cwd+'/applications/' + appname + '/uploads'
   input_file=os.path.join(cwd,heya.ssf_saved_name)
   
   
   
   db(db.Uploads.id==heya.id).update(check_file=1)
   f=open(input_file,'r')
   chunks=['']*100000
   length=[0]*100000
   ans=[]
   c=0
   j=0
   tmpn=[]
   tmpn2=[]
   tmpr=[]
   tmpr2=[]
   noun_phrase=[]
   ans2=[]
   redub=[]
   redub2=[]
   lines=f.readlines()
   line_no=-1
   for line in lines:
	line_no+=1
        flag=0
	j+=1
	if j==1:
		continue	
#	print line
	s=line.split("\t")
#	print s
	if len(s)<3:
           continue
#tmp2 stores chunk ids and tmp stores the actual words        
        if(len(s[2])>=2):    
           if s[2][0]=='N' and s[2][1]=='N':
		    tmpn.append(s[1])
		    tmpn2.append(s[0])
		    tmpr2.append(s[0])
		    
	   else :
		    if(len(tmpn)>1):
		       noun_phrase.append(tmpn)
		       ans2.append(tmpn2)
		    tmpn=[]
		    tmpn2=[]
            
		       
	   

	   if s[2]=="RDP":
		    
		    
		    j=line_no
		    #print j
		    while 1:
		           ss=lines[j].split("\t")
		           if(ss[2]!="SYM" and ss[1]!="(("):
			     j-=1
		           else :
			     break
		    j-=1

		    while(j<=line_no):
		       ss=lines[j].split("\t")
		       tmpr.append(ss[1])
		       tmpr2.append(ss[0])
		       j+=1
	   else :
		    if(len(tmpr)>1):
		       redub.append(tmpr)
		       redub2.append(tmpr2)
		       tmpr=[]
		       tmpr2=[]
	            else:
			    tmpr=[]
			    tmpr2=[]
    			    
   for i in noun_phrase:
    ans=''
    k=0
    for j in i:
	if(k==0):
		ans=j
	else:
        	ans=ans+' '+j
        k=k+1
    db.MWE.insert(name=ans,mwe_type="Noun_Phrase",corr_file=heya.id)
   redirect(URL('file_list'))
    
    




def file_list():
    p=db(db.Uploads.id>0).select()
    
    return dict(p=p)
    

def homepage():
   
    
    c=db(db.Uploads.id>0).select()
    d=db(db.MWE.id>0).select()
    return dict(c=c,d=d)


def change():
    a=request.vars.public1
     
    c=db(db.MWE.id>0).select()
    for i in c:
        if(i.name==a):
            db(db.MWE.id == i.id).delete()
    return "abc"


def change_add():
    a=request.vars.public2
    b=request.vars.public21
    c=request.vars.type
    db.MWE.insert(name=a,mwe_type=c,corr_file=b[0])
    return "abc"
    
def store_relations():
     a = request.vars
     course_grains = a['course_grain']
     if(course_grains == None):
          redirect(URL('annotate')) 
     relationdict = {}
     for i in course_grains:
         if i in a:
            relationdict[i] = a[i]
     cwd=os.getcwd()
     appname = request.application
     cwd=cwd+'/applications/' + appname + '/uploads'
     tempcwd = cwd + '/tempfile'
     l=session.b
     l=l.split('_')
     filename = db(db.Uploads.id==l[0]).select(db.Uploads.name)
     cwd = cwd + '/'+filename[0].name
     with open(tempcwd, 'w') as f: # write file2
        text="\n\nMulti-Word Expression:" + session.a + "   (Semantic Relations)\n\nCourse Grain-Fine Grain Relations\n"
        num = 1
        for i in course_grains:
         if i in a:
            text = text + str(num) + '. ' + i + '-' + relationdict[i] 
         else:
             text = text + str(num) + '. ' + i 
         num = num + 1
        f.write(text)

     # append file2 to file1
     with open(tempcwd, 'rb') as input_file, open(cwd, 'ab') as output_file:
         copyfileobj(input_file, output_file)
        
     os.remove(tempcwd)
     redirect(URL('annotate')) 
 
def download_file():
    name = request.vars.filename
    return response.stream(open(name))            
             
def store_paraphrase():
     a = request.vars
     paraphrase = a['Passage']
     if paraphrase == "":
         redirect(URL('annotate')) 
     typeof = a['type']
     cwd=os.getcwd()
     appname = request.application
     cwd=cwd+'/applications/' + appname + '/uploads'
     tempcwd = cwd + '/tempfile'
     l=session.b
     l=l.split('_')
     filename = db(db.Uploads.id==l[0]).select(db.Uploads.name)
     cwd = cwd + '/'+filename[0].name
     with open(tempcwd, 'w') as f: # write file2
        text="\n\nMulti-Word Expression:" + session.a + "   (Semantic Relations)\n\nParaphrase - " + typeof + "\n" + paraphrase + '\n'
        f.write(text)

     # append file2 to file1
     with open(tempcwd, 'rb') as input_file, open(cwd, 'ab') as output_file:
         copyfileobj(input_file, output_file)
        
     os.remove(tempcwd)
     redirect(URL('annotate'))   

def annotate():
    k=session.a
    appname = request.application
    str1='applications/' + appname + '/private/Semantic_Relations'
    filevar = open(str1,'r')
    readvar = filevar.readlines()  
    coursegrain_dict = {}
    for i in readvar:
    	relations = i.split('-')
    	if len(relations) == 1:
		coursegrain_dict[relations[0]] = ""
	else:
                if relations[0] not in coursegrain_dict:
                     coursegrain_dict[relations[0]]=[]
		coursegrain_dict[relations[0]].append(relations[1])   
    return locals()
    
        
        
def reset():
    expression = request.vars.exp
    temp = str(session.a).replace(' ', '*')
    b = ""
    c = temp.split('*')
    for i in c:
        b = b + '[' + i + ']'
    redirect(URL('bracket', vars=dict(exp=session.a, v=temp, brackets = b)))       
    
def change_page():
    session.a=request.vars.public1
    session.b=request.vars.public3
    return locals()


def validate():
    a = request.vars
    k = a['expression'].split('*')
    b = a['ee']
    d = a['bracket']
    if (len(a['numbers']) == 0):
        redirect(URL('bracket', vars=dict(exp=b, v=a['expression'], brackets = d)))
    else:
        l = a['numbers'].split(' ')
        if(len(l) <= 1):
            redirect(URL('bracket', vars=dict(exp=b, v=a['expression'], brackets = d)))
        numlist = [] #converting elements in l to int
        for i in l:
            numlist.append(int(i))
        l = numlist[:]
        l.sort()
        length = len(l)
        newlis = k[int(l[0]) - 1:int(l[length - 1])]
        k[int(l[0]) - 1:int(l[length - 1])] = []
        tempstr = ""
        for i in range(len(newlis)):
            tempstr = tempstr + newlis[i]
            if(i < len(newlis) - 1):
                tempstr = tempstr + ' '
        k[int(l[0]) - 1: int(l[0]) - 1] = [tempstr]
        finallist = ""
        for i in range(len(k)):
           finallist = finallist + k[i]
           if(i < len(k) - 1):
                finallist = finallist + '*'
        num1 = int(l[0]) - 1
        num2 = int(l[length - 1])   
        #d = d[0:num1] + '[' + d[num1:num2] + ']' + d[num2:]
        startk = k[num1].split(' ')
        comparestr = ""
        for i in startk:
            comparestr = comparestr + '\[+' + i + '\]+'
        finalstr = ""
        listofstrings = re.findall(comparestr,d)
        final = '[' + listofstrings[0] + ']'
        tempd = re.sub(comparestr, final ,d)
        redirect(URL('bracket', vars=dict(exp=b, v=finallist, brackets = tempd)))
    return locals()
    
   
def anno():
    
        temp = str(session.a).replace(' ', '*')
        b = ""
        c = temp.split('*')
        for i in c:
            b = b + '[' + i + ']'
        l=session.a
        l=l.split(' ')
        if(len(l)>2):
            redirect(URL('bracket', vars=dict(exp=session.a, v=temp, brackets = b)))
        if(len(l)==2):
            redirect(URL('annotate'))


def bracket():
    expression = request.vars.exp
    tempexpression = request.vars.v
    sentencelength = len(expression.split(' '))
    d = request.vars.brackets
    exp = request.vars.v.split('*')
    length = len(exp)
    form = SQLFORM.factory(Field('Bracketted_Expression',requires=IS_NOT_EMPTY()))
    MAX_SIZE=1000
    class node:
         def __init__(self):
              self.data=''
              self.parent = None
              self.level_no=0
              self.children=[]
              self.beforespace = 0
              self.afterspace = 0
              self.idnum = 0
    s=d
    par = {}
    tree=[None]*MAX_SIZE
    #       tree[i]=node()
     #       tree[i].l
    level=[0]*MAX_SIZE
    nodes=['']*MAX_SIZE
    top=0
    variable = 1
    b=node()
    b.data=expression
    b.level_no=0
    b.parent = None
    tree[0]=b
    #maximum - The depth of the tree
    maximum=0
    i=0
    tree2=[]
    while i<(len(s)):
         
         if s[i]!='[' and s[i]!=']':
              a=node()
              while s[i]!='[' and s[i]!=']':
                   a.data+=s[i]
                   i+=1
              a.level_no=top
              if top>maximum:
                   maximum=top
              tree[top]=a
              if tree[top-1]==None:
                  c=node()
                  c.data="EMPTY"
                  c.level_no=top-1
                  
                  #tree[top-1]=node()
                  #tree[top-1].data="EMPTY"
                  #tree[top-1].level_no=top-1
                  tree[top-1]=c
                  #tree2.append(tree[top-1])
              tree[top-1].children.append(a)
         if s[i]=='[':
              if i!=0 and s[i-1]=='[':
                  tree[top]=node()
                  tree[top].data="EMPTY"
                  tree[top].level_no=top
                 # tree2.append(tree[top])
                  tree[top-1].children.append(tree[top])
              top+=1
         elif s[i]==']':
              top-=1
         i+=1
    
    
    queue=deque()      
    queue.append(b)
    inqueue=1
    while inqueue!=0:
        ss=queue.popleft()
        tree2.append(ss)
        inqueue-=1
        ss.idnum = variable
        variable = variable + 1  
        for j in ss.children:
             queue.append(j)
             inqueue+=1
             j.parent=ss
             
    
    level=maximum-1     
    while level>=0:
            for j in tree2:
                    if j!=None and j.data=="EMPTY" and j.level_no==level:
                        o=''
                        for k in j.children:
                                o+=k.data+' '
                        oo = re.sub(r"\s", r"+",o)  #for eliminating extra spaces on joining children to form parent string
                        o = re.sub(r"\++", r" ",oo)
                        j.data=o
            level-=1
    
    queue=deque()
    
    
    for j in range(len(tree2)):
        if(tree2[j].level_no >= 1):
            par[tree2[j].idnum] = tree2[j].parent.idnum
    
    
    
    
    treelen = len(tree2) #for calculating spaces before and after a parent node at level one
    for j in range(treelen):
        while(tree2[j].level_no == 1):
            tempnode = tree2[j]
            while(tempnode != None):
                tree2[j].beforespace = tree2[j].beforespace + tempnode.beforespace
                if(len(tempnode.children) == 0):
                    break
                tempnode = tempnode.children[0]
                tempnode.beforespace = len(tempnode.data)
            
            tempnode = tree2[j]
            while(tempnode != None):
                tree2[j].afterspace = tree2[j].afterspace + tempnode.afterspace
                number_of_children = len(tempnode.children)
                if(number_of_children == 0):
                    break
                tempnode = tempnode.children[number_of_children - 1]
                tempnode.afterspace = len(tempnode.data)
            break
            
    levelnodes = []
    xlevel = 0
    num = 0
    queue.append(b)
    inqueue=1
    extraspace = 0
    while inqueue!=0:
        ss=queue.popleft()
        tree2.append(ss)
        inqueue-=1
        if(xlevel != ss.level_no):
            xlevel = ss.level_no
            num = num - extraspace
            levelnodes.append(num)
            num = 0
        num = num + len(ss.data) + 3 + ss.afterspace + ss.beforespace
        extraspace = ss.beforespace
        for j in ss.children:
             queue.append(j)
             inqueue+=1
             j.parent=ss
    levelnodes.append(num)
    return locals()


def store_bracket():
    a=request.vars.expresso
    l=session.b
    l=l.split('_')
    db.Bracketting.insert(mwe_id=l[1],Expression=a,file_id=l[0],user_id=auth.user.id)
    filename = db(db.Uploads.id==l[0]).select(db.Uploads.name)
    
    cwd=os.getcwd()
    appname = request.application
    cwd=cwd+'/applications/' + appname + '/uploads'
    tempcwd = cwd + '/tempfile'
    cwd = cwd + '/'+filename[0].name
    with open(tempcwd, 'w') as f: # write file2
       text="\n\nMulti-Word Expression:" + session.a + "   (Syntactic Relations)\n\nBracketing\n"
       text = text + a
       f.write(text)

     # append file2 to file1
    with open(tempcwd, 'rb') as input_file, open(cwd, 'ab') as output_file:
         copyfileobj(input_file, output_file)
        
    os.remove(tempcwd)
    return locals()




def previous():
    l=session.b
    l=l.split('_')
    
    a=db((db.Bracketting.id>0)&(db.Bracketting.mwe_id==l[1])).select()
    return locals()
    
def treeonly():
    expression = request.vars.exp
    form = SQLFORM.factory(Field('Bracketted_Expression',requires=IS_NOT_EMPTY()))
    MAX_SIZE=1000
    class node:
         def __init__(self):
              self.data=''
              self.parent = None
              self.level_no=0
              self.children=[]
              self.beforespace = 0
              self.afterspace = 0
              self.idnum = 0
    s=expression
    par = {}
    tree=[None]*MAX_SIZE
    #       tree[i]=node()
     #       tree[i].l
    level=[0]*MAX_SIZE
    nodes=['']*MAX_SIZE
    top=0
    variable = 1
    b=node()
    b.data=session.a
    b.level_no=0
    b.parent = None
    tree[0]=b
    #maximum - The depth of the tree
    maximum=0
    i=0
    tree2=[]
    while i<(len(s)):
         
         if s[i]!='[' and s[i]!=']':
              a=node()
              while s[i]!='[' and s[i]!=']':
                   a.data+=s[i]
                   i+=1
              a.level_no=top
              if top>maximum:
                   maximum=top
              tree[top]=a
              if tree[top-1]==None:
                  c=node()
                  c.data="EMPTY"
                  c.level_no=top-1
                  
                  #tree[top-1]=node()
                  #tree[top-1].data="EMPTY"
                  #tree[top-1].level_no=top-1
                  tree[top-1]=c
                  #tree2.append(tree[top-1])
              tree[top-1].children.append(a)
         if s[i]=='[':
              if i!=0 and s[i-1]=='[':
                  tree[top]=node()
                  tree[top].data="EMPTY"
                  tree[top].level_no=top
                 # tree2.append(tree[top])
                  tree[top-1].children.append(tree[top])
              top+=1
         elif s[i]==']':
              top-=1
         i+=1
    
    
    queue=deque()      
    queue.append(b)
    inqueue=1
    while inqueue!=0:
        ss=queue.popleft()
        tree2.append(ss)
        inqueue-=1
        ss.idnum = variable
        variable = variable + 1  
        for j in ss.children:
             queue.append(j)
             inqueue+=1
             j.parent=ss
             
    
    level=maximum-1     
    while level>=0:
            for j in tree2:
                    if j!=None and j.data=="EMPTY" and j.level_no==level:
                        o=''
                        for k in j.children:
                                o+=k.data+' '
                        oo = re.sub(r"\s", r"+",o)  #for eliminating extra spaces on joining children to form parent string
                        o = re.sub(r"\++", r" ",oo)
                        j.data=o
            level-=1
    
    queue=deque()
    
    
    for j in range(len(tree2)):
        if(tree2[j].level_no >= 1):
            par[tree2[j].idnum] = tree2[j].parent.idnum
    
    
    
    
    treelen = len(tree2) #for calculating spaces before and after a parent node at level one
    for j in range(treelen):
        while(tree2[j].level_no == 1):
            tempnode = tree2[j]
            while(tempnode != None):
                tree2[j].beforespace = tree2[j].beforespace + tempnode.beforespace
                if(len(tempnode.children) == 0):
                    break
                tempnode = tempnode.children[0]
                tempnode.beforespace = len(tempnode.data)
            
            tempnode = tree2[j]
            while(tempnode != None):
                tree2[j].afterspace = tree2[j].afterspace + tempnode.afterspace
                number_of_children = len(tempnode.children)
                if(number_of_children == 0):
                    break
                tempnode = tempnode.children[number_of_children - 1]
                tempnode.afterspace = len(tempnode.data)
            break
            
    levelnodes = []
    xlevel = 0
    num = 0
    queue.append(b)
    inqueue=1
    extraspace = 0
    while inqueue!=0:
        ss=queue.popleft()
        tree2.append(ss)
        inqueue-=1
        if(xlevel != ss.level_no):
            xlevel = ss.level_no
            num = num - extraspace
            levelnodes.append(num)
            num = 0
        num = num + len(ss.data) + 3 + ss.afterspace + ss.beforespace
        extraspace = ss.beforespace
        for j in ss.children:
             queue.append(j)
             inqueue+=1
             j.parent=ss
    levelnodes.append(num)
    return locals()
