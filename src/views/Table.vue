<template>
  <div class="table-page">
    <div class="header-area mt-6">
      <div class="header-title">
        <h1>Employees</h1>
      </div>

      <div class="header-toolbar">
        <div class="toolbar-inside">
          <div class="search-bar">
            <input type="search" placeholder="Search for a employee">
          </div>

          <div class="actions-bar ml-2">
            <div class="v-popover">
              <div aria-describedby="popover_hnnjcqwyhw" class="trigger" style="display: inline-block;">
                <button class="button">More <span class="dashicons dashicons-arrow-down"></span></button>
              </div>
            </div>
          </div>

          <div class="actions-bar ml-2">
            <button class="button primary">Add Employee</button>
          </div>
        </div>
      </div>
    </div>

    <div class="wd-table-nav">
      <ul class="table-subnav">
        <li class="filter-item">
          <a href="#" class="filter-link active">Active <span class="badge">26</span></a>
        </li>
        <li class="filter-item">
          <a href="#" class="filter-link">All <span class="badge">123</span></a>
        </li>
        <li class="filter-item">
          <a href="#" class="filter-link">Inactive <span class="badge">0</span></a>
        </li>
        <li class="filter-item">
          <a href="#" class="filter-link">Terminated <span class="badge">24</span></a>
        </li>
      </ul>

      <div class="table-filter">
        <div class="v-popover">
          <div aria-describedby="popover_xwnwzfmi8f" class="trigger" style="display: inline-block;">
            <button class="button with-icon"><span class="dashicons dashicons-filter"></span> Filter
              <span class="dashicons dashicons-arrow-down"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <table class="wd-table">
      <thead>
        <tr>
          <td id="cb" class="manage-column column-cb check-column">
            <input type="checkbox">
          </td>
          <th class="name-column">Name</th>
          <th class="id-column">ID No.</th>
          <th class="dept-column">Department</th>
          <th class="joined-column">Joined</th>
          <th class="status-column">Status</th>
          <th class="action-column"></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th class="check-column">
            <input id="cb-select-1" type="checkbox" name="post[]" value="1">
          </th>
          <td class="name-column">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" class="avatar">
            <span class="name d-block"><a href="#">Tamim Iqbal</a></span>
            <span class="designation style-dim">Software Engineer</span>
          </td>
          <td class="id-column">
                1001
          </td>
          <td class="dept-column">
            <span class="dept d-block mb-1">Engineering</span>
            <span class="type d-block style-dim">Full Time</span>
          </td>
          <td class="joined-column">
            <span class="joined d-block mb-1">1st Aug, 2019</span>
            <span class="joined-elapsed d-block style-dim">10 months ago</span>
          </td>
          <td class="status-column">
            <span class="status Active">Active</span>
          </td>
          <td class="action-column">
            <div class="v-popover">
              <div aria-describedby="popover_t4b8lm68pu" class="trigger" style="display: inline-block;">
                <button class="icon-button">
                  <svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="dashicon dashicons-ellipsis"><path d="M5 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="wd-table-paginate">
      <span class="displaying-num">75 items</span>
      <span class="pagination-links">
        <span aria-hidden="true" class="tablenav-pages-navspan button disabled">«</span>
        <a href="#" class="prev-page button">
          <span class="screen-reader-text">Previous page</span><span aria-hidden="true">‹</span>
        </a>
        <span class="screen-reader-text">Current Page</span>
        <span id="table-paging" class="paging-input">
          <span class="tablenav-paging-text">2 of <span class="total-pages">4</span></span>
        </span>
        <a href="#" class="next-page button">
          <span class="screen-reader-text">Next page</span>
          <span aria-hidden="true">›</span>
        </a>
        <a href="#" class="last-page button">
          <span class="screen-reader-text">Last page</span>
          <span aria-hidden="true">»</span>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Table',

  data () {
    return {

    }
  }
}
</script>

<style lang="css">
.d-block {
    display: block
}

.d-none {
    display: none
}

.style-dim {
    color: #999
}

.mt-2 {
    margin-top: 10px
}

.mt-6 {
    margin-top: 30px
}

.mb-1 {
    margin-bottom: 5px
}

.ml-2 {
    margin-left: 10px
}

.header-area {
    margin-bottom: 20px;
    width: 100%;
    -ms-flex-align: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.header-area,.header-area .header-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    align-items: center
}

.header-area .header-title {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center
}

.header-area .header-toolbar {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0
}

.header-area .header-toolbar .toolbar-inside {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.header-area .header-toolbar .toolbar-inside .dashicons {
    margin-top: -2px;
    height: 15px
}

.header-area .header-toolbar .search-bar input {
    padding: 4px 10px;
    font-size: 15px;
    border: 1px solid #d6d6d6;
    width: 230px
}

.wd-table-nav {
    border: 1px solid #dee2e6;
    background: #fff;
    margin: 0 0 -1px 0
}

.wd-table-nav,.wd-table-nav ul.table-subnav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.wd-table-nav ul.table-subnav {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    margin: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.wd-table-nav ul.table-subnav li.filter-item {
    margin: 0
}

.wd-table-nav ul.table-subnav .filter-link {
    text-decoration: none;
    color: #a9a9a9;
    font-size: 15px;
    padding: 1rem 1.2rem;
    display: block;
    border-bottom: 1px solid transparent
}

.wd-table-nav ul.table-subnav .filter-link .badge {
    margin-left: 8px
}

.wd-table-nav ul.table-subnav .filter-link:hover {
    color: #777
}

.wd-table-nav ul.table-subnav .filter-link.active {
    color: #12263f;
    background-color: transparent;
    border-color: transparent transparent #0071a1
}

.wd-table-nav ul.table-subnav .badge {
    display: inline-block;
    padding: 2px 10px;
    font-size: 75%;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    border-radius: 10rem;
    vertical-align: middle;
    color: #0170a1;
    background-color: #e2e6ed
}

.wd-table-nav .table-filter {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    padding: .8rem 1.2rem 0 0
}

.wd-table {
    width: 100%;
    background-color: #fff;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.04);
    box-shadow: 0 1px 1px rgba(0,0,0,.04);
    margin: 0 0 15px 0;
    border: 1px solid #dee2e6;
    vertical-align: top;
    border-spacing: 0;
    text-align: left
}

.wd-table td,.wd-table th {
    padding: .7rem .5rem;
    border-bottom: 1px solid #dee2e6
}

.wd-table thead {
    background: #f7f7f7
}

.wd-table tbody {
    vertical-align: inherit
}

.wd-table tbody tr:hover {
    color: #212529;
    background-color: rgba(0,0,0,.02)
}

.wd-table a {
    text-decoration: none
}

.wd-table .check-column {
    vertical-align: middle;
    width: 2rem;
    padding-left: .8rem
}

.wd-table-paginate {
    text-align: right;
    margin-bottom: 10px;
    vertical-align: middle;
    height: 30px;
    line-height: 2em
}

.wd-table-paginate .displaying-num {
    margin-right: 7px
}

.wd-table-paginate .paging-input {
    margin: 0 5px
}

.wd-table-paginate .button {
    min-width: 30px;
    margin-right: 4px!important
}

.name-column img.avatar {
    float: left;
    margin-right: 10px;
    max-width: 48px;
    height: auto;
    border-radius: 50%;
    border: 1px solid #ddd
}

.name-column .name {
    display: block;
    font-weight: 700;
    font-size: 1.1em;
    margin-bottom: 5px
}

.status-column {
    vertical-align: middle!important
}

.status-column .status {
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 3px;
    display: inline-block
}

.status-column .status.Active {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb
}

.status-column .status.Inctive {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb
}


</style>
