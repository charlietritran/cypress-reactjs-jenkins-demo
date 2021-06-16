import axios from 'axios';

class AppService {

  /**
   * GET CITM INIT DATA IN JSON FORMAT
   * RETURN: a json data for citm-app 
   * @param {*} url 
   */
  async getCitmDataJson(url) {

    console.log("@@@ ===> GET CitmJsonData STARTS - URL:" + url );
    try {
      const result = await axios.get(url);

      console.log('SUCCESS');
      return result.data;

    } catch (error) {

      console.log('GET citmDataJson ERROR:' + error.message);
      throw error;
    }
  }

}

export default AppService;
