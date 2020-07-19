import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

baseUrl = 'https://search.naver.com/search.naver?where=image&sm=tab_jum&query='
plusUrl = input('검색어를 입력하세요: ')
url = baseUrl + urllib.parse.quote_plus(plusUrl)
html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')
img = soup.find_all(class_='_img')

n = 1
for i in img:
    imgUrl = i['data-source']
    with urllib.request.urlopen(imgUrl) as f:
        with open('./img/'+plusUrl + str(n) + '.jpg', 'wb') as h:
            img = f.read()
            h.write(img)
    n += 1
print('다운완료')
