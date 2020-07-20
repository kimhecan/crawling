from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver

url = 'https://vibe.naver.com/chart/total'

driver = webdriver.Chrome()
driver.get(url)

html = driver.page_source
soup = BeautifulSoup(html)

title = soup.select('.tracklist .link_text')
rank = soup.select('.rank .text')
singer = soup.select('tbody .artist')

for i in range(len(title)):
    print('음원순위: ', rank[i].get_text())
    print('음원제목: ', title[i].attrs['title'])
    print('가수: ', singer[i].attrs['title'])
    print()


driver.close()
