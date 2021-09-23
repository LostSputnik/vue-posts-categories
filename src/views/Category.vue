<template>
    <div class="Category">
        <div class="header">
            <h2>All Categories</h2>
        </div>
        <div class="addNew">
            <AddCategory/>
        </div>
        <div class="allCategories">
            <div v-for="category in allCategories" :key="category.id">
                <SingleCategory :category="category" />
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddCategory from '@/components/AddCategory.vue'
import SingleCategory from '@/components/SingleCategory.vue'

export default {
    name: 'Category',
    components: {
        AddCategory,
        SingleCategory
    },
    computed: {
        ...mapGetters(['allCategories'])
    }
}
</script>

<style>
.header {
    margin-left: 10px;
}
.allCategories {
    margin: 10px auto
}

</style>