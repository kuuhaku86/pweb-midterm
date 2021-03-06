var tableElm = $('#historySoftware');

tableElm.DataTable({
	processing: true,
	serverSide: true,
	ajax: tableElm.data('ajaxurl'),
	columns: [
		{
			data: 'id',
			name: null,
			searchable: false,
			visible: false,
        },
        {
			title: 'Date',
			data: 'date',
			name: 'software_buyers.updated_at',
			searchable: true,
			visible: true,
		},
		{
			title: 'Name',
			data: 'software_name',
			name: 'software.name',
			searchable: true,
			visible: true,
        },
		{
			title: 'Description',
			data: 'software_description',
			name: 'software.description',
			searchable: true,
			visible: true,
		},
		{
			title: 'Price',
			data: 'software_price',
			name: 'software.price',
			searchable: true,
			visible: true,
		},
		{
			title: 'Type',
			data: 'software_type',
			name: 'software_types.type',
			searchable: true,
			visible: true,
		},
		{
			title: 'Rating',
			data: 'software_rating',
			name: 'software_buyers.rating',
			searchable: true,
            visible: true,
        },
        {
			title: 'Review',
			data: 'software_review',
			name: 'software_buyers.review',
			searchable: true,
            visible: true,
		}
	],
});