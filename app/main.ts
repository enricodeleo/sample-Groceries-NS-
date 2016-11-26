import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { AppModule } from './app.module';
import { setStatusBarColors } from './utils/status-bar-util';

setStatusBarColors(); // Set statusbar color as soon as possible (namely before bootstrapping the app)

platformNativeScriptDynamic().bootstrapModule(AppModule);
