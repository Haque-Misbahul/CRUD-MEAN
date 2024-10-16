import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Import your main application module

platformBrowserDynamic()
  .bootstrapModule(AppModule) // Bootstrap the main application module
  .catch((err) => console.error(err));
