<template>
  <div class="table-page">
    <h1>Table Page</h1>

    <div class="tablenav top"></div>
    <table class="wp-list-table widefat fixed striped posts">
      <thead>
        <tr>
          <td id="cb" class="manage-column column-cb check-column"><input type="checkbox"></td>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="check-column">
            <input id="cb-select-1" type="checkbox" name="post[]" value="1">
          </th>
          <td>
            <strong><a class="row-title" href="http://wp.test/wp-admin/post.php?post=1&amp;action=edit" aria-label="“Hello world!” (Edit)">Hello world!</a></strong>
          </td>
        </tr>
      </tbody>
    </table>
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
</style>
