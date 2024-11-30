const  notionApiKey = "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; //your API

function createTask(dataBaseId,taskName) {
  let url = "https://api.notion.com/v1/pages"
  let payload = {
    'parent': { 'database_id': dataBaseId },
    'properties': {
      '名前': {
        'title': [
          {
            'text': {
              'content': taskName
            }
          }
        ]
      }
    }
  };
  const opts = {
    'method': 'POST',
    'headers': {
      'Notion-Version': '2022-06-28',
      'Authorization': 'Bearer ' + notionApiKey,
      'Content-Type': 'application/json'
    },
    'payload': JSON.stringify(payload),
  };

  const Result = JSON.parse(UrlFetchApp.fetch(url, opts));
  console.log(Result)
  const ResultPage = Result.results
}
