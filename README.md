# Foobar

TikTok_download_server_api is a node library for download video no watermark or only audio video.

## Installation

Use node & npm.

```bash
npm install
```

## Usage
Using post method sent body json
```python
url : http://127.0.0.1:3000/handle
body : {"url": "https://www.tiktok.com/@youneszarou/video/6942436555692805381"}
response : 
{
    "nowm": "https://ttdownloader.com/dl.php?v=YTo0OntzOjk6IndhdGVybWFyayI7YjowO3M6NzoidmlkZW9JZCI7czozMjoiYzc5YWZmNmIwYzkwNzk2ZDMxODg0YmU0MmMxMjJjNGIiO3M6MzoidWlkIjtzOjMyOiJiOTVlNzhiMmVmM2RiNjJmYjFkMTI4ZWE2ZGVjMGU2ZSI7czo0OiJ0aW1lIjtpOjE2NTYzMDA2Njk7fQ==",
    "wm": "https://ttdownloader.com/dl.php?v=YTo0OntzOjk6IndhdGVybWFyayI7YjoxO3M6NzoidmlkZW9JZCI7czozMjoiYzc5YWZmNmIwYzkwNzk2ZDMxODg0YmU0MmMxMjJjNGIiO3M6MzoidWlkIjtzOjMyOiJiOTVlNzhiMmVmM2RiNjJmYjFkMTI4ZWE2ZGVjMGU2ZSI7czo0OiJ0aW1lIjtpOjE2NTYzMDA2Njk7fQ==",
    "audio": "https://ttdownloader.com/mp3.php?v=YTozOntzOjc6InZpZGVvSWQiO3M6MzI6ImM3OWFmZjZiMGM5MDc5NmQzMTg4NGJlNDJjMTIyYzRiIjtzOjM6InVpZCI7czozMjoiYjk1ZTc4YjJlZjNkYjYyZmIxZDEyOGVhNmRlYzBlNmUiO3M6NDoidGltZSI7aToxNjU2MzAwNjY5O30="
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
