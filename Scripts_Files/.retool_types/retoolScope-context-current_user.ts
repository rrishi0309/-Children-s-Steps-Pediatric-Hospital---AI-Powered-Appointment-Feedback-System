const _LEVEL_1 = {
  "_current_user_groups": [{
      "_selector": ["current_user","groups","0"] as const,
      "id": 4161212,
      "name": "admin"
    } as const,{
      "_selector": ["current_user","groups","1"] as const,
      "id": 4161215,
      "name": "All Users"
    } as const] as const,
}
const current_user = {
  "_selector": ["current_user"] as const,
  "lastName": "Ramesh",
  "profilePhotoUrl": null,
  "name": "",
  "sid": "user_a5d6b299cb1d4ebfb2b0161d1f0f2001",
  "metadata": {
    "_selector": ["current_user","metadata"] as const
  } as const,
  "groups": _LEVEL_1["_current_user_groups"] as RetoolArrayWrapper<["current_user","groups"], typeof _LEVEL_1["_current_user_groups"], 2>,
  "externalIdentifier": null,
  "fullName": "Rishi Ramesh",
  "locale": "en",
  "id": 1592675,
  "firstName": "Rishi",
  "email": "u1500299@utah.edu"
} as const
