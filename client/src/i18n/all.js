import LocalizedStrings from 'react-localization';
import frenchStrings from './fr'
export const strings = new LocalizedStrings({
 en:{
	clade: {  operations: {
      		      "view":"foo",
      		      "update":"bar",
      		      "evolve":"baz",
      		      "destroy":"yolo",
            },
            navigation: {
                edit: "Edit",
                return_to_tree: "Return to tree",
            },
            form:{
                missing_name: "Missing attribution name.",
                missing_date: "Missing attribution date.",
                missing_old_name: 'Missing the old name.',
                select_status: "Please select a status (Extant/Extinct)",
                error: "Error in one or more attributions.",
                back: "Back to View",
                cancel: "Cancel",
                set_new_parent: "Set New Parent",
                parents_name: "Start typing the parent's name",
                name: "Name",
                clade: "Clade",
                alt_names: "Alternative names",
                status: "Status",
                description: "Description",
                attributions: "Attributions",
                clade_images: "Clade Images",
                drop_images: "Drop Images Here",
                uploaded_images: "Uploaded Images:",
            },
            search: "Search for Clade",
            alternate: "Alternate Names:",
            wiki: "Lookup In Wikipedia",
            depth:"Depth",
            reset:"Reset Zoom / Center Cladogram",
            no_description: "No description provided",
    	   },
 },
 fr: frenchStrings,

})
