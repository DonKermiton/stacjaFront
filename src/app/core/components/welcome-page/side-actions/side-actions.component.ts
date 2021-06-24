import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-side-actions',
  templateUrl: './side-actions.component.html',
  styleUrls: ['./side-actions.component.scss']
})
export class SideActionsComponent implements OnInit {
  public mode: 'login' | 'register' = 'login';
  // @ts-ignore
  @ViewChild('rootEl', {static: true}) rootEl: ElementRef;

  public loginForm: FormGroup;
  public registerForm: FormGroup;

  public currentlyLoggedEmail: string = String();

  constructor(private route: ActivatedRoute,
              private v2: Renderer2,
              private router: Router,
              private formBuilder: FormBuilder,
              public authService: AuthService) {
    this.loginForm = formBuilder.group({});
    this.registerForm = formBuilder.group({});
  }

  ngOnInit(): void {
    this.initLoginForm();
    this.initRegisterForm();
    Promise.resolve(null).then(() => {
      this.route.queryParams.subscribe((params) => {
        console.log(+params.active);
        if (+params.active) {
          this.v2.addClass(this.rootEl.nativeElement, 'active');
        } else if (!+params.active) {
          this.v2.removeClass(this.rootEl.nativeElement, 'active');
        }
      });
    });
    this.authService.isUserLogged().subscribe((e) => {
      if (!e) {
        return;
      }
      this.currentlyLoggedEmail = e.email;
    });
  }


  closeModal(): void {
    this.router.navigate([], {queryParams: {active: '0'}});
  }

  public onLogin(): void {
    this.authService.logViaEmail(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .subscribe((response) => {
        console.log(response);
      });
  }

  public onRegister(): void {
    this.authService.createUserViaEmail(this.registerForm.getRawValue()).subscribe(console.log);
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      ['email']: [null, [Validators.required, Validators.email]],
      ['password']: [null, [Validators.required]],
    });
  }

  private initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      ['first_name']: [null, [Validators.required]],
      ['second_name']: [null, [Validators.required]],
      ['email']: [null, [Validators.required]],
      ['phone_number']: [null, [Validators.required]],
      ['password']: [null, [Validators.required]]
    });
  }
}
