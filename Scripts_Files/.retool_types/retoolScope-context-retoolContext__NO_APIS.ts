const _LEVEL_1 = {
  "_retoolContext_pages": [{
      "_selector": ["retoolContext","pages","0"] as const,
      "id": "Home",
      "title": "Home",
      "url": "Home",
      "isCurrentPage": true
    } as const,{
      "_selector": ["retoolContext","pages","1"] as const,
      "id": "About",
      "title": "About",
      "url": "About",
      "isCurrentPage": false
    } as const,{
      "_selector": ["retoolContext","pages","2"] as const,
      "id": "Contact",
      "title": "Contact",
      "url": "Contact",
      "isCurrentPage": false
    } as const,{
      "_selector": ["retoolContext","pages","3"] as const,
      "id": "Feedback_Dashboard",
      "title": "Admin Dashboard",
      "url": "Feedback_Dashboard",
      "isCurrentPage": false
    } as const,{
      "_selector": ["retoolContext","pages","4"] as const,
      "id": "Patient_Portal",
      "title": "Patient Portal",
      "url": "Patient_Portal",
      "isCurrentPage": false
    } as const,{
      "_selector": ["retoolContext","pages","5"] as const,
      "id": "Patient_Login",
      "title": "Patient Login",
      "url": "Patient_Login",
      "isCurrentPage": false
    } as const,{
      "_selector": ["retoolContext","pages","6"] as const,
      "id": "Admin_Login",
      "title": "Admin Login",
      "url": "Admin_Login",
      "isCurrentPage": false
    } as const] as const,
  "_retoolContext_runningQueries": ["select_feedback_all","select_feedback_stars","query1","select_patient_history","select_patient_history_admin"] as const,
}
const retoolContext = {
  "_selector": ["retoolContext"] as const,
  "translations": {
    "_selector": ["retoolContext","translations"] as const
  } as const,
  "pages": _LEVEL_1["_retoolContext_pages"] as RetoolArrayWrapper<["retoolContext","pages"], typeof _LEVEL_1["_retoolContext_pages"], 7>,
  "runningQueries": _LEVEL_1["_retoolContext_runningQueries"] as RetoolArrayWrapper<["retoolContext","runningQueries"], typeof _LEVEL_1["_retoolContext_runningQueries"], 5>,
  "currentPage": "Home",
  "pageTag": "latest",
  "appName": "Neural Nexus - Competition App",
  "environment": "production",
  "inEditorMode": true,
  "appUuid": "f9399d9c-0a0f-11f0-b9f1-6f72351a8084"
} as const
