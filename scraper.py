from bs4 import BeautifulSoup
import requests


def scrape_read_me(project):
    page_to_scrape = requests.get("https://github.com/liamceelent/" + project)

    soup = BeautifulSoup(page_to_scrape.text, "html.parser")

    qoutes = soup.findAll("article", attrs={"class":"markdown-body entry-content container-lg"})
    for qoutess in qoutes:
        return qoutess.text
    
def scrape_project_names():
    page_to_scrape = requests.get("https://github.com/liamceelent?tab=repositories")

    soup = BeautifulSoup(page_to_scrape.text, "html.parser")

    project = soup.findAll("a", attrs={"itemprop":"name codeRepository"})

    all_projects = []

    for projects in project:
        all_projects.append(projects.text[2:].replace(" ", ""))
    return all_projects

print(scrape_project_names())