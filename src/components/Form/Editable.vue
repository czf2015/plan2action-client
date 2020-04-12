<template>
  
</template>

<script>
export default {
    props: {
        scroll: {
            type: Object,
            default: () => ({})
        },
        size: {
            type: String,
            default: 'default'
        },
        title: {
            type: String,
            default: ''
        },
        footer: {
            type: String,
            default: ''
        },
        pagination: {
            type: String,
            default: ''
        },
        columns: {
            type: Array,
            default: () => [
                {
                    title: '',
                    dataIndex: '',
                    key: '',
                    width: 100,
                    sorter: (a, b) => a - b,
                    fixed: 'left',
                    filters: [
                        {
                            text: '',
                            value: ''
                        }
                    ],
                    onFilter: () => {},
                    children: []
                }
            ]
        },
        dataSource: []
    },

    methods: {
        onFilter,
        sorter,
        search,
    }
}
</script>

<style>

</style>