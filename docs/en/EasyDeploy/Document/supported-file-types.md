# Supported file types
Default support for executable files (*. exe) and batch files (*. bat) execution.
It also supports script files, such as Python (*. py) and PowerShell (*. ps1).

## Collocation method
### Executable file(*.exe)
| Type | Content |
| --- | --- |
| Service Name | Custom Service Name |
| Service Path | Select *.exe file |
| Service Path Type | Save in absolute path or relative path |
| Parameter | Application Parameters |

### Batch file(*.bat)
| Type | Content |
| --- | --- |
| Service Name | Custom Service Name |
| Service Path | Select *.bat file |
| Service Path Type | Save in absolute path or relative path |
| Parameter | No Application Parameters |

### Python script(*.py)
| Type | Content |
| --- | --- |
| Service Name | Custom Service Name |
| Service Path | Fixed content:python |
| Service Path Type | 任意 |
| Parameter | Python Script file path |

### Powershell script(*.ps1)
| Type | Content |
| --- | --- |
| Service Name | Custom Service Name |
| Service Path | Fixed content:powershell |
| Service Path Type | 任意 |
| Parameter | Powershell Script file path |