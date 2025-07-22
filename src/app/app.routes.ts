import { Routes } from '@angular/router';
import { HomeComponent } from './dinamica/home/home.component';
import { LoginComponent } from './dinamica/login/login.component';
import { RegistroComponent } from './dinamica/registro/registro.component';
import { SinGlutenComponent } from './dinamica/sin-gluten/sin-gluten.component';
import { SinLactosaComponent } from './dinamica/sin-lactosa/sin-lactosa.component';
import { VeganoComponent } from './dinamica/vegano/vegano.component';
import { BajasCaloriasComponent } from './dinamica/bajas-calorias/bajas-calorias.component';
import { AltoProteinaComponent } from './dinamica/alto-proteina/alto-proteina.component';
import { ConsejosComponent } from './dinamica/consejos/consejos.component';
import { EventosComponent } from './dinamica/eventos/eventos.component';
import { PolloComponent } from './dinamica/pollo/pollo.component';
import { PescadoComponent } from './dinamica/pescado/pescado.component';
import { HuevoComponent } from './dinamica/huevo/huevo.component';
import { QuesoComponent } from './dinamica/queso/queso.component';
import { TomateComponent } from './dinamica/tomate/tomate.component';
import { ArrozComponent } from './dinamica/arroz/arroz.component';
import { MantenimientoComponent } from './dinamica/mantenimiento/mantenimiento.component';
import { ErrorComponent } from './dinamica/error/error.component';
import { SobreNosotrosComponent } from './dinamica/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './dinamica/contacto/contacto.component';
import { TerminosComponent } from './dinamica/terminos/terminos.component';

export const routes: Routes = [
    {path: '', title: 'IvanFit Recipes Iván Paúl Alba', component: HomeComponent},
    {path: 'home', title: 'Home', component: HomeComponent},
    {path: 'login', title: 'Login', component: LoginComponent},
    {path: 'registro', title: 'Registro', component: RegistroComponent},
    {path: 'sinGluten', title: 'Sin gluten', component: SinGlutenComponent},
    {path: 'sinLactosa', title: 'Sin lactosa', component: SinLactosaComponent},
    {path: 'vegano', title: 'Vegano', component: VeganoComponent},
    {path: 'bajasCalorias', title: 'Baja en calorías', component: BajasCaloriasComponent},
    {path: 'altoProteina', title: 'Alto en proteína', component: AltoProteinaComponent},
    {path: 'consejos', title: 'Consejos', component: ConsejosComponent},
    {path: 'eventos', title: 'Eventos', component: EventosComponent},
    {path: 'pollo', title: 'Pollo', component: PolloComponent},
    {path: 'pescado', title: 'Pescado', component: PescadoComponent},
    {path: 'huevo', title: 'Huevo', component: HuevoComponent},
    {path: 'queso', title: 'Queso', component: QuesoComponent},
    {path: 'tomate', title: 'Tomate', component: TomateComponent},
    {path: 'arroz', title: 'Arroz', component: ArrozComponent},
    {path: 'mantenimiento', title: 'Mantenimiento', component: MantenimientoComponent},
    {path: 'sobreNosotros', title: 'Sobre nosotros', component: SobreNosotrosComponent},
    {path: 'contacto', title: 'Contacto', component: ContactoComponent},
    {path: 'terminos', title: 'Términos y privacidad', component: TerminosComponent},
    {path: '**', title: 'Error', component: ErrorComponent}
];