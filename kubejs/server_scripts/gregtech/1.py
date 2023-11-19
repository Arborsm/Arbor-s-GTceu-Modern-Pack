import re #导入re模块
import os #导入os模块

pattern = re.compile(".*event\.add\(.*\{") #创建正则表达式对象
cwd = os.getcwd() #获取当前工作目录
#打开一个文本文件，或者创建一个字符串，作为要搜索的目标
file_path = os.path.join(cwd, "kubejs/server_scripts/gregtech/ores.txt")
with open(file_path, encoding='gb18030', errors='ignore') as f: #打开一个文本文件
    text = f.read() #读取文件内容

matches = pattern.findall(text) #使用re模块的findall()方法，返回一个列表，包含所有匹配的行
file_path2 = os.path.join(cwd, "kubejs/server_scripts/gregtech/output.txt")
#打开一个新的文本文件，作为要写入的目标
with open(file_path2, "w") as f: #打开一个新的文本文件
    for match in matches: #遍历列表，将每一行写入到新的文本文件中
        f.write(match + "\n") #使用write()方法，并在每一行后添加换行符"\n"
