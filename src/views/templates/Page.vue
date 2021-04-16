<template>
  <div>
    <div
      class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show"
      id="sidebar"
    >
      <div class="c-sidebar-brand d-lg-down-none">
        <svg
          class="c-sidebar-brand-full"
          width="118"
          height="46"
          alt="CoreUI Logo"
        >
          <use xlink:href="assets/brand/coreui.svg#full"></use>
        </svg>
        <svg
          class="c-sidebar-brand-minimized"
          width="46"
          height="46"
          alt="CoreUI Logo"
        >
          <use xlink:href="assets/brand/coreui.svg#signet"></use>
        </svg>
      </div>

      <ul class="c-sidebar-nav ps">
        <li class="c-sidebar-nav-item">
          <a class="c-sidebar-nav-link" href="#">
            <i class="c-sidebar-nav-icon cil-speedometer"></i>
            Dashboard
          </a>
        </li>

        <li class="c-sidebar-nav-title">Components</li>

        <li class="c-sidebar-nav-item">
          <a class="c-sidebar-nav-link" href="/">
            <i class="c-sidebar-nav-icon cil-home"></i>
            Home
          </a>
        </li>

        <li class="c-sidebar-nav-divider"></li>

        <li class="c-sidebar-nav-title">Extras</li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
          <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
            <i class="c-sidebar-nav-icon cil-star"></i>
            Pages
          </a>
          <ul class="c-sidebar-nav-dropdown-items">
            <li class="c-sidebar-nav-item">
              <a class="c-sidebar-nav-link" href="login.html" target="_top">
                Login
              </a>
            </li>
            <li class="c-sidebar-nav-item">
              <a class="c-sidebar-nav-link" href="register.html" target="_top">
                <svg class="c-sidebar-nav-icon">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"
                  ></use>
                </svg>
                Register</a
              >
            </li>
            <li class="c-sidebar-nav-item">
              <a class="c-sidebar-nav-link" href="404.html" target="_top">
                <svg class="c-sidebar-nav-icon">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bug"
                  ></use>
                </svg>
                Error 404</a
              >
            </li>
            <li class="c-sidebar-nav-item">
              <a class="c-sidebar-nav-link" href="500.html" target="_top">
                <svg class="c-sidebar-nav-icon">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bug"
                  ></use>
                </svg>
                Error 500</a
              >
            </li>
          </ul>
        </li>
        <li class="c-sidebar-nav-item mt-auto">
          <a
            class="c-sidebar-nav-link c-sidebar-nav-link-success"
            href="https://coreui.io"
            target="_top"
          >
            <svg class="c-sidebar-nav-icon">
              <use
                xlink:href="vendors/@coreui/icons/svg/free.svg#cil-cloud-download"
              ></use>
            </svg>
            Download CoreUI</a
          >
        </li>
        <li class="c-sidebar-nav-item">
          <a
            class="c-sidebar-nav-link c-sidebar-nav-link-danger"
            href="https://coreui.io/pro/"
            target="_top"
          >
            <svg class="c-sidebar-nav-icon">
              <use
                xlink:href="vendors/@coreui/icons/svg/free.svg#cil-layers"
              ></use>
            </svg>
            Try CoreUI<strong>PRO</strong></a
          >
        </li>
        <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
          <div
            class="ps__thumb-x"
            tabindex="0"
            style="left: 0px; width: 0px;"
          ></div>
        </div>
        <div class="ps__rail-y" style="top: 0px; right: 0px;">
          <div
            class="ps__thumb-y"
            tabindex="0"
            style="top: 0px; height: 0px;"
          ></div>
        </div>
      </ul>
      <button
        class="c-sidebar-minimizer c-class-toggler"
        type="button"
        data-target="_parent"
        data-class="c-sidebar-minimized"
      ></button>
    </div>

    <div class="c-wrapper c-fixed-components">
      <header
        class="c-header c-header-light c-header-fixed c-header-with-subheader"
      >
        <button
          class="c-header-toggler c-class-toggler d-lg-none mfe-auto"
          type="button"
          data-target="#sidebar"
          data-class="c-sidebar-show"
        >
          <svg class="c-icon c-icon-lg">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
          </svg>
        </button>

        <a class="c-header-brand d-lg-none" href="#">
          <svg width="118" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#full"></use>
          </svg>
        </a>

        <button
          class="c-header-toggler c-class-toggler mfs-3 d-md-down-none"
          type="button"
          data-target="#sidebar"
          data-class="c-sidebar-lg-show"
          responsive="true"
        >
          <i class="c-sidebar-nav-icon cil-menu"></i>
        </button>

        <!-- <ul class="c-header-nav d-md-down-none">
          <li class="c-header-nav-item px-3">
            <a class="c-header-nav-link" href="#">Dashboard</a>
          </li>
          <li class="c-header-nav-item px-3">
            <a class="c-header-nav-link" href="#">Users</a>
          </li>
          <li class="c-header-nav-item px-3">
            <a class="c-header-nav-link" href="#">Settings</a>
          </li>
        </ul> -->

        <ul class="c-header-nav ml-auto mr-4">
          <li class="c-header-nav-item d-md-down-none mx-2">
            <a class="c-header-nav-link" href="#">
              <i class="c-icon cil-bell"></i>
            </a>
          </li>
          <li class="c-header-nav-item d-md-down-none mx-2">
            <a class="c-header-nav-link" href="#">
              <i class="c-icon cil-list-rich"></i>
            </a>
          </li>
          <li class="c-header-nav-item d-md-down-none mx-2">
            <a class="c-header-nav-link" href="#">
              <i class="c-icon cil-envelope-open"></i>
            </a>
          </li>

          <li class="c-header-nav-item dropdown">
            <a
              class="c-header-nav-link"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="c-avatar">
                <img
                  class="c-avatar-img"
                  src="assets/img/avatars/6.jpg"
                  alt="user@email.com"
                />
              </div>
            </a>

            <div class="dropdown-menu dropdown-menu-right pt-0">

              <div class="dropdown-header bg-light py-2">
                <strong>Account</strong>
              </div>
              <a class="dropdown-item" href="#">
                <svg class="c-icon mr-2">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"
                  ></use>
                </svg>
                Updates<span class="badge badge-info ml-auto">42</span>
              </a>
              <a class="dropdown-item" href="#">
                <svg class="c-icon mr-2">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"
                  ></use>
                </svg>
                Messages<span class="badge badge-success ml-auto">42</span>
              </a>
              <a class="dropdown-item" href="#">
                <svg class="c-icon mr-2">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-task"
                  ></use>
                </svg>
                Tasks<span class="badge badge-danger ml-auto">42</span>
              </a>
              <a class="dropdown-item" href="#">
                <svg class="c-icon mr-2">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-comment-square"
                  ></use>
                </svg>
                Comments<span class="badge badge-warning ml-auto">42</span>
              </a>

              <div class="dropdown-header bg-light py-2">
                <strong>Settings</strong>
              </div>
              <a class="dropdown-item" href="#">
                <svg class="c-icon mr-2">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"
                  ></use>
                </svg>
                Profile</a
              >
              <a class="dropdown-item" href="#">
                <svg class="c-icon mr-2">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-settings"
                  ></use>
                </svg>
                Settings
              </a>
              <a class="dropdown-item" href="#">
                <svg class="c-icon mr-2">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-credit-card"
                  ></use>
                </svg>
                Payments<span class="badge badge-secondary ml-auto">42</span>
              </a>
              <a class="dropdown-item" href="#">
                <svg class="c-icon mr-2">
                  <use
                    xlink:href="vendors/@coreui/icons/svg/free.svg#cil-file"
                  ></use>
                </svg>
                Projects<span class="badge badge-primary ml-auto">42</span>
              </a>

              <div class="dropdown-divider"></div>

              <a class="dropdown-item" href="#" @click="doLogout">
                <i class="c-icon mr-2 cil-account-logout"></i>
                Sair
              </a>

            </div>

          </li>

        </ul>

        <!-- <div class="c-subheader px-3">
          <ol class="breadcrumb border-0 m-0">
            <li class="breadcrumb-item">Home</li>
            <li class="breadcrumb-item"><a href="#">Admin</a></li>
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>
        </div> -->

      </header>

      <div class="c-body">
        <main class="c-main">
          <div class="container-fluid">
            <router-view></router-view>
          </div>
        </main>

        <footer class="c-footer">
          <div><a href="https://coreui.io">CoreUI</a> © 2020 creativeLabs.</div>
          <div class="ml-auto">
            Powered by&nbsp;<a href="https://coreui.io/">CoreUI</a>
          </div>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      doLogout() {
          localStorage.removeItem('token');
          localStorage.removeItem('token_refresh');
          localStorage.removeItem('user');
          this.$router.push('/login');
      }
  }
};
</script>