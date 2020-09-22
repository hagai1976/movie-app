import { Injectable, NgZone } from "@angular/core";

// RXJS
import { BehaviorSubject, Observable, Subject, observable } from 'rxjs';
import { tap, takeUntil, map } from 'rxjs/operators';


// FLEX LAYOUT
import { MediaObserver, MediaChange, MediaMarshaller } from '@angular/flex-layout';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';


@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    private readonly onDestroy = new Subject<void>();


    // FLEX-LAYOUT MEDIA OBSERVARE
    activeMediaQuery: string = '';
    isMobile: boolean;

    constructor(
        private mediaObserver: MediaObserver,
        private scrollDispacher: ScrollDispatcher,
        private ngZone: NgZone,
        m: MediaMarshaller
    ) {
        // CAN'T BE DESTROYED
        this.mediaObserver.media$.pipe(
            takeUntil(this.onDestroy),
            tap((change: MediaChange) => {
                this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
                if (change.mqAlias === 'xs' || change.mqAlias === 'sm') {
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
            })
        ).subscribe();

        // hack until resolve: https://github.com/angular/flex-layout/issues/1201
        // @ts-ignore
        m.subject.subscribe((x) => {
            // @ts-ignore
            if (m.activatedBreakpoints.filter((b) => b.alias === 'print').length === 0) {
            // @ts-ignore
            this.lastValue = [...m.activatedBreakpoints];
            } else {
            // @ts-ignore
            m.activatedBreakpoints = [...this.lastValue];
            // @ts-ignore
            m.hook.collectActivations = () => {};
            // @ts-ignore
            m.hook.deactivations = [...this.lastValue];
            }
        });
    }


    /*****************************/
    /********** LOADING **********/
    /*****************************/

    private loading$ = new Subject<boolean>();
    loadingListener$: Observable<boolean> = this.loading$.asObservable();
    loading(state: boolean) {
        this.loading$.next(state);
    }


    /******************************************/
    /********** FEATURE INFO CONTROL **********/
    /******************************************/

    private isControl$ = new BehaviorSubject<boolean>(true);
    isControlListenr$: Observable<boolean> = this.isControl$.asObservable();
    isControl(state: boolean) {
        this.isControl$.next(state)
    }


    /******************************************/
    /********** HIDE NAVIGATION TABS **********/
    /******************************************/

    hideNavigationTabs1$ = new BehaviorSubject<boolean>(false);
    hideNavigationTabs1Listener$: Observable<boolean> = this.hideNavigationTabs1$.asObservable();
    hideNavigationTabs1(state: boolean) {
        this.hideNavigationTabs1$.next(state);
    }

    // hideNavigationTabs2$ = new BehaviorSubject<boolean>(false);
    // hideNavigationTabs2Listener$: Observable<boolean> = this.hideNavigationTabs2$.asObservable();
    // hideNavigationTabs2(state: boolean) {
    //     this.hideNavigationTabs2$.next(state);
    // }

    //isNavigationTabsVisible: boolean = true;
    lastScrollTop: number = 0;
    navigationTabs() {
        return this.scrollDispacher.scrolled().pipe(
            map((event: CdkScrollable) => {
                let scrollTop = event.getElementRef().nativeElement.scrollTop;
                console.log(scrollTop);
                this.ngZone.run(() => {
                    if (scrollTop) {
                    let st = scrollTop;
                    if (st > this.lastScrollTop) {
                        // scrolling down
                        this.hideNavigationTabs1(true);
                        // this.hideNavigationTabs2(true);
                    }
                    else {
                        // scrolling up
                        //this.isNavigationTabsVisible = true;
                        this.hideNavigationTabs1(false);
                        // this.hideNavigationTabs2(false);
                    }
                    return this.lastScrollTop = st <= 0 ? 0 : st; // for mobile use or NEGATIVE scrolling
                    }
                })
            })
        )
    }


    /*****************************/
    /********** HEADERS **********/
    /*****************************/

    // MAIN TOOLBAR HEADER 1
    private mainToolbarHeader1$ = new BehaviorSubject<string>(null);
    mainToolbarHeader1Listenr$: Observable<string> = this.mainToolbarHeader1$.asObservable();
    mainToolbarHeader1(header1: string) {
        this.mainToolbarHeader1$.next(header1)
    }

    // MAIN TOOLBAR HEADER 1
    private mainToolbarHeader2$ = new BehaviorSubject<{ header: string, icon: string }>(null);
    mainToolbarHeader2Listenr$: Observable<{ header: string, icon: string }> = this.mainToolbarHeader2$.asObservable();
    mainToolbarHeader2(header2: { header: string, icon: string }) {
        this.mainToolbarHeader2$.next(header2)
    }

    // MAIN TOOLBAR HEADER 1 *** MOBILE
    private mainToolbarHeader3$ = new BehaviorSubject<string>(null);
    mainToolbarHeader3Listenr$: Observable<string> = this.mainToolbarHeader3$.asObservable();
    mainToolbarHeader3(header3: string) {
        this.mainToolbarHeader3$.next(header3)
    }



    /****************************/
    /********** MOBILE **********/
    /****************************/

    // ARROW BACK VISIBILITY
    private arrowBack$ = new BehaviorSubject<boolean>(false);
    arrowBackListener$: Observable<boolean> = this.arrowBack$.asObservable();
    arrowBack(state: boolean) {
        this.arrowBack$.next(state);
    }


    // TITLE
    private title$ = new BehaviorSubject<string>('');
    titleListenr$: Observable<string> = this.title$.asObservable();
    title(title: string) {
        this.title$.next(title)
    }


    // SEARCH ICON VISIBILITY
    private searchIcon$ = new BehaviorSubject<boolean>(true);
    searchIconListener$: Observable<boolean> = this.searchIcon$.asObservable();
    searchIcon(state: boolean) {
        this.searchIcon$.next(state);
    }


    // MOBILE TOOLBAR HEADER
    private descriptiveHeader$ = new BehaviorSubject<string>('');
    descriptiveHeaderListenr$: Observable<string> = this.descriptiveHeader$.asObservable();
    descriptiveHeader(descriptiveHeader: string) {
        this.descriptiveHeader$.next(descriptiveHeader)
    }


    // FILTER DATA ON MOBILE
    private filterDataOnMobile$ = new BehaviorSubject<boolean>(false);
    filterDataOnMobileListenr$: Observable<boolean> = this.filterDataOnMobile$.asObservable();
    filterDataOnMobile(state: boolean) {
        this.filterDataOnMobile$.next(state)
    }


    // GO BACK
    private goBack$ = new Subject<boolean>();
    goBackListener$: Observable<boolean> = this.goBack$.asObservable();
    goBack(state: boolean) {
        this.goBack$.next(state);
    }


    // HIDE ON SCROLL
    private hideOnScroll$ = new BehaviorSubject<boolean>(false);
    hideOnScrollListener$: Observable<boolean> = this.hideOnScroll$.asObservable();
    hideOnScroll(state: boolean) {
        this.hideOnScroll$.next(state);
    }


    ngOnDestroy(): void {
        this.onDestroy.next();
        this.onDestroy.complete();
    }


}