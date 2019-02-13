import LocalizedStrings from 'react-localization';
import frenchStrings from './fr'
export const localisedStringsTuple = new LocalizedStrings({
 en:{
	"view":"foo",
	"update":"bar",
	"evolve":"baz",
	"destroy":"yolo",
 },
 fr: frenchStrings,
})
