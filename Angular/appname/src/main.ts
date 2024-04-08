import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/user/user.component';
import { ContentComponent } from './app/content/content.component';
import { DataComponent } from './app/data/data.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(UserComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(ContentComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(DataComponent, appConfig)
  .catch((err) => console.error(err));


  // ng serve to run the files
  // ng generate component 'name' or n g c 'name' to generate any 
  // have to below links in all the content.components file having @component
  // import { RouterOutlet } from '@angular/router';
  // imports: [RouterOutlet],