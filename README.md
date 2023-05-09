# Hibir

<p align="center">
<a href=""><img src="https://img.shields.io/badge/supports-Docker-blue" /></a>
<a href=""><img src="https://img.shields.io/badge/python-3.9-orange"/></a>


<b>Hibir - a cross-platform and portable toolkit for automating routine processes when carrying out various works for testing!</b>
    <br />
    <br />
</p>  


# ✨ Features

| Structure |                          |
| ---------------- | ---------------------- |
| <ul><li>Teams<ul><li>Work team</li><li>Personal team</li></ul></li><li>⛑ Pentest projects<ul><li>🖥️ Hosts<ul><li>ip-address</li><li>hostnames</li><li>operation system</li><li>open ports</li><li>tester notes</li></ul></li><li>🐞 Issues<ul><li>Proof of concept</li></ul></li><li>🌐 Networks</li><li>🔑 Found credentials</li><li>📝 Notes</li><li>💬 Chats</li><li>📊 Report generation<ul><li>plaintext</li><li>docx</li><li>zip</li></ul></li><li>📁 Files</li><li>🛠 Tools</li></ul></li></ul> | ![image](https://i.ibb.co/v48y1py/2022-01-12-003906.png) |

* 🔬 You can create private or team projects!
* 💼 Team moderation.
* 🛠 Multiple tools integration support! Such as Nmap/Masscan, Nikto, Nessus and Acunetix!
* 🖥️ Cross-platform!

## 📊 Hibir vs analogues

| **Name**  | Hibir| Lair | Dradis | Faraday | AttackForge | PenTest.WS | Hive
| -------------- | --- | ---- | ------ | ------- | ----------- | ---------- | -----
| Portable | ✅ | ❌ | ❌ | ❌ | ❌  | ✅💲 | ❌
| Cross-platform | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌
| Free | ✅ | ✅ | ❌✅ | ❌✅ | ❌✅  | ❌✅ | ❌✅
| NOT deprecated! | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅
| Data export | ✅ | ❌✅ | ✅ | ✅ | ✅ | ❌✅ | ✅
| Chat | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅
| Made for sec specialists, not managers | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌✅ 
| Report generation | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅
| API | ✅ | ❌✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅
| Issue templates | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅

## 🛠 Supported tools

| **Tool name**                                                                                                                  | Integration type | Description
|--------------------------------------------------------------------------------------------------------------------------------| ---------------- | ---------------
| Nmap                                                                                                                           | Import | Import XML results (ip, port, service type, service version, hostnames, os). Supported plugins: vulners
| Nessus                                                                                                                         | Import | Import .nessus results (ip, port, service type, security issues, os)
| Qualys                                                                                                                         | Import | Import .xml results (ip, port, service type, security issues)
| Masscan                                                                                                                        | Import | Import XML results (ip, port)
| Nikto                                                                                                                          | Import | Import XML, CSV, JSON results (issue, ip, port)
| Acunetix                                                                                                                       | Import | Import XML results (ip, port, issue)
| Burp Suite Enterprise                                                                                                          | Import | Import HTML results (ip, port, hostname, issue, poc)
| kube-hunter                                                                                                                    | Import | Import JSON result (ip, port, service, issue)
| Checkmarx SAST                                                                                                                 | Import | Import XML/CSV results (code info, issue)
| Dependency-check                                                                                                               | Import | Import XML results (code issues)
| OpenVAS/GVM                                                                                                                    | Import | Import XML results (ip, port, hostname, issue)
| NetSparker                                                                                                                     | Import | Import XML results (ip, port, hostname, issue)
| [BurpSuite]() | Import/Extention | Extention for fast issue send from burpsuite.
| WPScan                                                                                                                         | Import | Import JSON results (ip, port, hostname, issue)
| DNSrecon                                                                                                                       | Import | Import JSON/CSV/XML results (ip, port, hostname)
| theHarvester                                                                                                                   | Import | Import XML results (ip, hostname)
| Metasploit                                                                                                                     | Import | Import XML project (ip, port, hostname, issue)
| Nuclei                                                                                                                         | Import | Import JSON results (ip, hostname, port, issue)
| PingCastle                                                                                                                     | Import | Import XML results (ip, issue)
| MaxPatrol                                                                                                                      | Import | Import XML results (ip, port, issue)
| Scanvus                                                                                                                        | Import | Import JSON report (issue)

## 🙋 Table of Contents
* 📖 [Fast Installation Guide](#install)
    * 💻 [Standalone](#windows-linux-macos)
    * 🐋 [Docker Usage](#docker)
* 🤸 [Usage](#usage)
* 🖼️ [Gallery](#gallery)
* ⚠️ [WARNING](#warning)
* 📝 [TODO](#todo)


<a id="install"></a>

# 📖 Fast Installation Guide
**You need only Python3**. 

<a id="windows-linux-macos"></a>
## 🖥️ Windows / Linux / MacOS

Download project:
```sh
git clone http://172.20.44.99:3000/ZablonS/Hibir.git 
```

Go to folder:
```bash
cd Hibir
```

Install deps (for unix-based systems):
```bash
pip3 install -r requirements_unix.txt

```
or windows:
```bash
pip.exe install -r requirements_windows.txt

```

Run initiation script:
```bash
python3 new_initiation.py
```
or windows
```bash
python.exe new_initiation.py
```

Edit configuration:
```bash
nano configuration/settings.ini
```

Run:
```bash
old version: python3 app.py
new version: python3 run.py
```
or windows
```bash
old version: python.exe app.py
new version: python.exe run.py
```

<a id="docker"></a>
## :whale: Docker 

Clone repository
```bash
git clone http://172.20.44.99:3000/ZablonS/Hibir.git
```
Go to folder:
```bash
cd Hibir
```

Build image:
```bash
docker build . --tag hibir:1.0 
```

Run docker-compose:
```bash
docker-compose up
```
and go to URL
```bash
https://127.0.0.1:443/
```
<a id="usage"></a>
# 🤸 Usage

Default port (check config): 443
Default ip (if run at localhost): 127.0.0.1 



1. Register at http(s)://\<ip\>:\<port\>/register

2. Login at http(s)://\<ip\>:\<port\>/login

3. Create team (if need) at http(s)://\<ip\>:\<port\>/create_team

4. Create project at http(s)://\<ip\>:\<port\>/new_project

5. Enjoy your hacking process! 

<a id="gallery"></a>
## 🖼️ Gallery


|||
:-------------------------:|:-------------------------:
![image](https://i.ibb.co/2vxsVRh/image.png)|![image](https://i.ibb.co/SPDcNWH/image.png)
Team information|Projects list
![image](https://i.ibb.co/YB9pDbn/image.png)|![image](https://i.ibb.co/bvy13Vp/image.png)
Project: issues|Project: host page
![image](https://i.ibb.co/HrqC5tn/image.png)|![image](https://i.ibb.co/7RmVRN7/image.png)
Project: hosts|Project:services
![image](https://i.ibb.co/QcLJDkN/image.png)|![image](https://i.ibb.co/NpCS7MX/image.png)
Project: issue info|Project: issue info (PoC)
![image](https://i.ibb.co/Bw7X2dD/image.png)|![image](https://i.ibb.co/LP4Wk4D/image.png)
Project: networks|Project: files
![image](https://i.ibb.co/m05NQ2Q/image.png)|![image](https://i.ibb.co/kMG3q1b/image.png)
Project: tools (may be changed)|Project: found credentials
![image](https://i.ibb.co/Y0Nm98f/image.png)|![image](https://i.ibb.co/Kqf7Ffm/image.png)
Project: testing notes|Project: chats
![image](https://i.ibb.co/nskQJgq/image.png)|![image](https://i.ibb.co/TW67yq1/image.png)
Project: settings|Project: reports

<a id="warning"></a>
# ⚠️ WARNING


#### 🚨 Default settings

This program, by default, uses 443 port and allows everyone to register and use it, so you need to set correct firewall & network rules.

#### 🔌 Initiation logic

Careful with new_initiation script! It makes some important changes with filesystem:

1. Renames database /configuration/database.sqlite3 
2. Regenerates SSL certificates
3. Regenerates session key.
4. Creates new empty /configuration/database.sqlite3 database
5. Creates /tmp_storage/ folder

<a id="todo"></a>
## 📝 TODO

#### General
* [x] Team config storage
* [x] Team report templates storage
* [x] Automatic database backup
* [x] Share Issues with non-registered users
* [x] Report generation
* [x] Fast popular password bruteforce check (top-10k)
* [x] REST-API
* [x] Network graph
* [x] Hash fast export/import
* [x] Add another databases
* [x] Add .doc report generation support
* [x] Issue templates
* [ ] Backup/Restore from backup projects/teams
* [ ] Notification for Messages
    
#### Tools
* [x] HTTP-sniffer
* [ ] NetNTLM smb sniffer
* [x] Custom tool txt report upload support (added notes to hosts)
* [x] Hash fast check top-10k passwords
* [ ] Export projects from Faraday/Dradis
* [ ] Metasploit/Cobalt Strike integration

#### Version 2.0

* [ ] Vue.js
* [ ] Websockets
* [ ] Push messages (updates)
* [ ] Database rebuild (objects)
* [ ] hosts -> interfaces -> ports
* [ ] hosts -> hostnames
* [ ] Project file manager
* [ ] Port -> Protocol:Software:Version
* [ ] User-defined host marks (mark all hosts with open port)
* [ ] TODO marks button every page
* [ ] Duplicate hosts (join them?)
* [ ] host MAC/AD domain/Forest



