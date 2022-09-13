import AxiosServices from "../AxiosServices";
import {fillData} from "./config";

const axiosServices = new AxiosServices;

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  async findAnswer(question) {
    const parameter = { message: question, sender: "0d3b3ed1-0456-4fba-9d6f-c04edc432674" }

    // const answerResponse = await axiosServices.post(process.env.REACT_APP_BACKEND_URL, parameter)
    const answerResponse = await axiosServices.post('http://localhost:5000/findAnswer', { question: question })
    let answer = answerResponse.data.data;
    this.actionProvider.provideAnswer(answer);
    fillData(answer.buttons)
    console.log(answer, 'response')
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase !== '') {
      this.findAnswer(lowercase);
    }

    // if (lowercase.includes("hello")) {
    //   this.actionProvider.greet();
    // }
  }
}

export default MessageParser;

