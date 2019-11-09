﻿/*!
    *
    * Wijmo Library 5.20192.631
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var wijmo;!function(e){window.wijmo||(window.wijmo=e);var a={Globalize:{name:"sv",displayName:"Swedish",numberFormat:{".":",",",":" ","-":"-","+":"+","%":"%",percent:{pattern:["-n %","n %"]},currency:{decimals:2,symbol:"kr",pattern:["-n $","n $"]}},calendar:{"/":"-",":":":",firstDay:1,days:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],daysAbbr:["sön","mån","tis","ons","tor","fre","lör"],months:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],monthsAbbr:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],am:["",""],pm:["",""],eras:["A.D."],patterns:{d:"yyyy-MM-dd",D:'"den "d MMMM yyyy',f:'"den "d MMMM yyyy HH:mm',F:'"den "d MMMM yyyy HH:mm:ss',t:"HH:mm",T:"HH:mm:ss",m:'"den "d MMMM',M:'"den "d MMMM',y:"MMMM yyyy",Y:"MMMM yyyy",g:"yyyy-MM-dd HH:mm",G:"yyyy-MM-dd HH:mm:ss",s:'yyyy"-"MM"-"dd"T"HH":"mm":"ss'}}},Licensing:{cls:"STÄNG",ctc:'Kontakta GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',dmn:"Wijmo licensen i denna ansökan är inte giltigt för den aktuella domänen. Licens domänen är <b>{licDomain}</b>; den aktuella domänen är <b>{domain}</b>.",evl:"Wijmo bedömningen Version ({version})",exp:"Wijmo licensen i denna ansökan har gått ut. Licensens förfallodatum är <b>{expDate:d}</b>.",hdr:"Wijmo licens",lic:"Wijmo licensen i denna ansökan är ogiltig.",mss:"Wijmo licensen i denna ansökan är inte inställd.",prd:"Wijmo licensen i denna ansökan är inte giltig för <b>{control}</b> kontroll.",ver:"Wijmo licensen i denna ansökan är inte giltigt för versionen som används. Licensversionen är <b>{licVer}</b>; produktversionen är <b>{version}</b>."},Calendar:{ariaLabels:{calendar:"Kalender",monthView:"Månadsvy",yearView:"Årsvy",prvMo:"Föregående månad",today:"I dag",nxtMo:"Nästa månad",prvYr:"Föregående år",currMo:"Aktuell månad",nxtYr:"Nästa år"}},DropDown:{ariaLabels:{tgl:"Toggle dropdown"}},FlexGrid:{groupHeaderFormat:"{name}: <b>{value}</b> ({count:n0} objekt)",ariaLabels:{toggleDropDown:"Toggle Dropdown",toggleGroup:"Växla gruppen"}},FlexGridDetailProvider:{ariaLabels:{toggleDetail:"Växla rad detalj"}},FlexGridFilter:{ariaLabels:{edit:"Redigera Filter för kolumn",dialog:"Filtrera redaktör för kolumn",asc:"Sorteringskolumnen i stigande ordning",dsc:"Sorteringskolumnen i fallande ordning",search:"Sök objektlista",op1:"Första villkoret operatör",val1:"Första villkoret värdet",and:"Kräver både förhållanden",or:"Kräver antingen skick",op2:"Andra villkoret operatör",val2:"Andra villkor värdet"},ascending:"↑ Stigande",descending:"↓ Fallande",apply:"Använd",cancel:"Avbryt",clear:"Rensa",conditions:"Filtrera efter villkor",values:"Filtrera efter värde",search:"Sök",selectAll:"Välj alla",null:"(inget)",header:"Visa artiklar där värdet",and:"Och",or:"Eller",stringOperators:[{name:"(ej angett)",op:null},{name:"Är lika med",op:0},{name:"Inte är lika med",op:1},{name:"Börjar med",op:6},{name:"Slutar med",op:7},{name:"Innehåller",op:8},{name:"Inte innehåller",op:9}],numberOperators:[{name:"(ej angett)",op:null},{name:"Är lika med",op:0},{name:"Inte är lika med",op:1},{name:"Är större än",op:2},{name:"Är större än eller lika med",op:3},{name:"Är mindre än",op:4},{name:"Är mindre än eller lika med",op:5}],dateOperators:[{name:"(ej angett)",op:null},{name:"Är lika med",op:0},{name:"är innan",op:4},{name:"är efter",op:2}],booleanOperators:[{name:"(ej angett)",op:null},{name:"Är lika med",op:0},{name:"Inte är lika med",op:1}]},InputDateTime:{ariaLabels:{tglDate:"Växla kalendern",tglTime:"Växla tid lista"}},InputNumber:{ariaLabels:{incVal:"Öka värdet",decVal:"Minska värde"}},MultiSelect:{itemsSelected:"{count:n0} objekt utvalda",selectAll:"Välj alla"},olap:{PivotFieldEditor:{dialogHeader:"Inställningar:",header:"Sidhuvud:",summary:"Sammanfattning:",showAs:"Visa som:",weighBy:"Väga av:",sort:"Sortera:",filter:"Filtrera:",format:"Format:",sample:"Provkarta:",edit:"Redigera…",clear:"Rensa",ok:"OK",cancel:"Avbryt",none:"(inga)",sorts:{asc:"Stigande",desc:"Fallande"},aggs:{sum:"Summa",cnt:"Antal",avg:"Medel",max:"Max",min:"Min",rng:"Område",std:"Stdav",var:"Varians",stdp:"StdDevPop",varp:"VarPop",first:"Första",last:"Sista"},calcs:{noCalc:"Ingen beräkning",dRow:"Skillnaden från föregående rad",dRowPct:"% Skillnaden från föregående rad",dCol:"Skillnaden från föregående kolumn",dColPct:"% Skillnaden från föregående kolumn",dPctGrand:"% av totalsumma",dPctRow:"% av rad totalt",dPrevRow:"% av värdet i föregående rad",dPctCol:"procent av totalsummor",dPrevCol:"% av värdet i kolumnen föregående",dRunTot:"Kör totalt",dRunTotPct:"% igång totalt"},formats:{n0:"Heltal (n0)",n2:"Float (n2)",c:"Valuta (c)",p0:"Procent (p0)",p2:"Procentandel (p2)",n2c:"Tusentals (n2,)",n2cc:"Miljoner (n2,,)",n2ccc:"Miljarder (n2,,,)",d:"Datum (d)",MMMMddyyyy:"Dag, månad, år (MMMM dd, yyyy)",dMyy:"Dag månad år (d-M-yy)",ddMyy:"Dag månad år (dd-M-yy)",dMyyyy:"Dag månad år (M/yyyydd)",MMMyyyy:"Månad år (MMM yyyy)",MMMMyyyy:"Månad år (MMMM yyyy)",yyyyQq:'År kvartalet (yyyy "Q" q)',FYEEEEQU:'Räkenskapsåret kvartalet ("FY" EEEE "Q" U)'}},PivotEngine:{grandTotal:"Totalt",subTotal:"Delsumma"},PivotPanel:{fields:"Välja fält för att lägga till rapporten:",drag:"Dra fält mellan nedanstående områden:",filters:"Filter",cols:"Kolumner",rows:"Rader",vals:"Värden",defer:"Skjuta upp uppdateringar",update:"Uppdatera"},_ListContextMenu:{up:"Flytta upp",down:"Flytta ned",first:"Flytta till början",last:"Flytta till slutet",filter:"Flytta till rapportfilter",rows:"Flytta till radetiketter",cols:"Flytta till kolumnetiketter",vals:"Flytta till värden",remove:"Ta bort fält",edit:"Fältinställningar…",detail:"Visa detaljer…"},PivotChart:{by:"Med",and:"och"},DetailDialog:{header:"Detaljerad vy:",ok:"OK",items:"{cnt:n0} objekt",item:"{cnt} objekt",row:"Rad",col:"Kolumn"},Slicer:{multiSelect:"Flerval",clearFilter:"Rensa Filter"}},Viewer:{cancel:"Avbryt",ok:"OK",bottom:"Botten:",top:"Topp:",right:"Höger:",left:"Vänster:",margins:"Marginaler (tum)",orientation:"Orientering:",paperKind:"Papper typ:",pageSetup:"Utskriftsformat",landscape:"Liggande",portrait:"Stående",pageNumber:"Sidnummer",zoomFactor:"Zoom-faktor",paginated:"Utskriftslayout",print:"Skriv ut",search:"Sök",matchCase:"Matcha gemener/VERSALER",wholeWord:"Matcha hela ord",searchResults:"Sökresultat",previousPage:"Föregående sida",nextPage:"Nästa sida",firstPage:"Första sidan",lastPage:"Sista sidan",backwardHistory:"Bakåt",forwardHistory:"Framåt",pageCount:"Page Count",selectTool:"Välj verktyget",moveTool:"Flytta verktyget",continuousMode:"Kontinuerlig sidvyn",singleMode:"Enda sida vy",wholePage:"Passar hela sidan",pageWidth:"Passa sidbredden",zoomOut:"Zooma ut",zoomIn:"Zooma In",rubberbandTool:"Zooma efter markering",magnifierTool:"Förstoringsglas",rotatePage:"Rotera sida",rotateDocument:"Rotera dokument",exports:"Exportera",fullScreen:"Helskärm",exitFullScreen:"Avsluta helskärmsläget",hamburgerMenu:"Verktyg",showSearchBar:"Visa sökfältet",viewMenu:"Layoutalternativ",searchOptions:"Sökalternativ",matchCaseMenuItem:"Matcha gemener/VERSALER",wholeWordMenuItem:"Matcha hela ord",thumbnails:"Sidminiatyrer",outlines:"Dokumentöversikt",loading:"Laddar…",pdfExportName:"Adobe PDF",docxExportName:"Öppna XML-Word",xlsxExportName:"Öppna XML-Excel",docExportName:"Microsoft Word",xlsExportName:"Microsoft Excel",mhtmlExportName:"Webbarkiv (MHTML)",htmlExportName:"HTML-dokument",rtfExportName:"RTF-dokument",metafileExportName:"Komprimerade metafiler",csvExportName:"CSV",tiffExportName:"TIFF-bilder",bmpExportName:"BMP-bilder",emfExportName:"Utökad metafil",gifExportName:"GIF-bilder",jpgExportName:"JPEG-bilder",jpegExportName:"JPEG-bilder",pngExportName:"PNG-bilder",abstractMethodException:"Detta är en abstrakt metod, genomföra vänligen den.",cannotRenderPageNoViewPage:"Kan inte renderas utan Dokumentkälla och visa sidan.",cannotRenderPageNoDoc:"Kan inte renderas utan Dokumentkälla och visa sidan.",exportFormat:"Exportformat:",exportOptionTitle:"Exportalternativ",documentRestrictionsGroup:"Dokument begränsningar",passwordSecurityGroup:"Säkerhet för lösenord",outputRangeGroup:"Utdata-intervall",documentInfoGroup:"Dokumentinfo",generalGroup:"Allmänt",docInfoTitle:"Titel",docInfoAuthor:"Författare",docInfoManager:"Chef",docInfoOperator:"Operatör",docInfoCompany:"Företag",docInfoSubject:"Ämne",docInfoComment:"Kommentar",docInfoCreator:"Skapat av",docInfoProducer:"Producent",docInfoCreationTime:"Skapad kl",docInfoRevisionTime:"Ändrad tid",docInfoKeywords:"Nyckelord",embedFonts:"Bädda in TrueType-teckensnitt",pdfACompatible:"PDF/A-kompatibel (nivå 2B)",useCompression:"Använd komprimering",useOutlines:"Generera konturer",allowCopyContent:"Tillåta innehåll kopiering eller utvinning",allowEditAnnotations:"Tillåt redigering av anteckning",allowEditContent:"Tillåt redigering av innehåll",allowPrint:"Tillåt utskrift",ownerPassword:"Lösenord för behörighet (ägare):",userPassword:"Dokument öppna (användare) lösenord:",encryptionType:"Krypteringsnivå:",paged:"Växlad",showNavigator:"Visa navigering",navigatorPosition:"Navigator Position",singleFile:"GÅSMARSCH",tolerance:"Tolerans när upptäcka text bounds (Poäng):",pictureLayer:"Använd separat bild layer",metafileType:"Metafil typ:",monochrome:"Monokrom",resolution:"Upplösning:",outputRange:"Sidintervall:",outputRangeInverted:"Omvänd",showZoomBar:"Zoom fältet",searchPrev:"Sök tidigare",searchNext:"Sök nästa",checkMark:"✓",exportOk:"Exportera…",cannotSearch:"Sök kräver att en dokumentkälla anges.",parameters:"parameters",requiringParameters:"Vänligen mata in parametrar.",nullParameterError:"Värdet får inte vara null.",invalidParameterError:"Ogiltig inmatning.",parameterNoneItemsSelected:"(inga)",parameterAllItemsSelected:"(alla)",parameterSelectAllItemText:"(Markera alla)",selectParameterValue:"(Välj värde)",apply:"Använd",errorOccured:"Ett fel uppstod."},FlexSheet:{insertRow:"Infoga nu",deleteRow:"Ta bort rad",insertCol:"Infoga kolumn",deleteCol:"Ta bort kolumn",convertTable:"Omvandla tabell",copyCells:"Kopiera celler",fillSeries:"Fyllningsserier",fillFormat:"Fyll endast formatering",fillWithoutFormat:"Fyll utan formatering",insertSheet:"Infoga",deleteSheet:"Radera",renameSheet:"Byt namn"}},r=window.wijmo._updateCulture;r?r(a):window.wijmo.culture=a}(wijmo||(wijmo={}));