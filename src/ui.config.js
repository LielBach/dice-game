import Button from "primevue/button"
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';


function register_ui_components(app){
  app.component('Button', Button);
  app.component('Card', Card);
  app.component('InputText', InputText);
}

export default register_ui_components