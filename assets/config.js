const config = {};

config.submitQuery =
  "https://g6iqtcvhyl.execute-api.ap-south-1.amazonaws.com/api/queries";

config.bookaStay =
  "https://g6iqtcvhyl.execute-api.ap-south-1.amazonaws.com/api/bookastay";
config.bookameditation =
  "https://g6iqtcvhyl.execute-api.ap-south-1.amazonaws.com/api/bookameditation";

config.notificationUrl =
  //  "https://static-file-staging.web.app/conf/gurugram/notification.json";
  "https://g6iqtcvhyl.execute-api.ap-south-1.amazonaws.com/api/getnotifications";
config.quoteUrl =
  "https://writenode.heartfulness.org/in//wp-json/v3/obt/single-today";

config.eventsUrl =
  "https://g6iqtcvhyl.execute-api.ap-south-1.amazonaws.com/api/geteventslist";

config.pasteventUrl =
  "https://g6iqtcvhyl.execute-api.ap-south-1.amazonaws.com/api/getpasteventslist";

export default config;
