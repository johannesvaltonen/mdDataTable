angular.module("mdtTemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/main/templates/generateTable.html","<md-virtual-repeat-container class=\"md-virtual-repeat-container\" ng-if=\"virtualRepeat\">\r\n    <table cellpadding=\"0\" cellspacing=\"0\">\r\n        <thead mdt-generated-header-row></thead>\r\n        <tbody ng-include src=\"\'/main/templates/rows/generateRowsVirtualRepeat.html\'\"></tbody>\r\n    </table>\r\n</md-virtual-repeat-container>\r\n\r\n<table ng-if=\"!virtualRepeat\" cellpadding=\"0\" cellspacing=\"0\">\r\n    <thead mdt-generated-header-row></thead>\r\n    <tbody ng-include src=\"\'/main/templates/rows/generateRows.html\'\"></tbody>\r\n</table>\r\n");
$templateCache.put("/main/templates/largeEditDialog.html","<md-dialog style=\"min-width: 300px;\" layout-padding>\r\n    <md-dialog-content style=\"margin-left:16px;margin-right:16px;\" layout-align=\"column\">\r\n        <form ng-submit=\"saveRow()\" name=\"editFieldForm\">\r\n            <h2>{{cellData.attributes.editableFieldTitle}}</h2>\r\n            <md-input-container md-no-float style=\"margin-bottom:0;width:100%\">\r\n\r\n                <!-- TODO getting placeholder -->\r\n                <input type=\"text\"\r\n                       ng-model=\"cellData.value\"\r\n                       placeholder=\"\"\r\n                       md-maxlength=\"{{cellData.attributes.editableFieldMaxLength}}\" />\r\n            </md-input-container>\r\n        </form>\r\n    </md-dialog-content>\r\n\r\n    <md-dialog-actions>\r\n        <md-button class=\"md-raised md-primary\" ng-click=\"saveRow()\">{{mdtTranslations.largeEditDialog.saveButtonLabel}}</md-button>\r\n        <md-button class=\"md-raised\" ng-click=\"cancel()\">{{mdtTranslations.largeEditDialog.cancelButtonLabel}}</md-button>\r\n    </md-dialog-actions>\r\n</md-dialog>\r\n");
$templateCache.put("/main/templates/mdtAlternateHeaders.html","<div class=\"mdt-header-alternate\" layout=\"row\" layout-align=\"start center\">\r\n    <span class=\"alternate-text\" flex>{{getNumberOfSelectedRows()}} item selected</span>\r\n    <md-button class=\"md-icon-button md-primary\" ng-click=\"deleteSelectedRows()\" aria-label=\"Delete selected rows\">\r\n        <ng-md-icon icon=\"delete\" size=\"24\"></ng-md-icon>\r\n    </md-button>\r\n\r\n    <md-button class=\"md-icon-button md-primary\" aria-label=\"More options\">\r\n        <ng-md-icon icon=\"more_vert\" size=\"24\"></ng-md-icon>\r\n    </md-button>\r\n</div>");
$templateCache.put("/main/templates/mdtCardFooter.html","<div class=\"mdt-footer\" layout=\"row\" ng-show=\"isPaginationEnabled()\">\r\n    <div class=\"mdt-pagination\"\r\n         layout=\"row\"\r\n         layout-align=\"end center\"\r\n         flex>\r\n\r\n        <span layout-margin>{{mdtTranslations.rowsPerPage}}</span>\r\n        <md-input-container>\r\n            <md-select ng-model=\"rowsPerPage\" aria-label=\"rows per page\">\r\n                <md-option ng-value=\"pageSize\" ng-repeat=\"pageSize in mdtPaginationHelper.rowsPerPageValues\">{{pageSize}}</md-option>\r\n            </md-select>\r\n        </md-input-container>\r\n\r\n        <span layout-margin>\r\n            <span ng-if=\"mdtPaginationHelper.getTotalRowsCount() != 0\" style=\"margin:0;\">{{mdtPaginationHelper.getStartRowIndex()+1}}-</span>{{mdtPaginationHelper.getEndRowIndex()+1}} {{mdtTranslations.pageRowsOfTotalRowsSeparator}} {{mdtPaginationHelper.getTotalRowsCount()}}\r\n        </span>\r\n\r\n        <md-button class=\"md-icon-button md-primary\" ng-class=\"{\'md-inactive\': !mdtPaginationHelper.hasPreviousPage()}\" aria-label=\"Previous page\" ng-click=\"mdtPaginationHelper.previousPage()\">\r\n            <ng-md-icon icon=\"keyboard_arrow_left\" size=\"24\"></ng-md-icon>\r\n        </md-button>\r\n\r\n        <md-button class=\"md-icon-button md-primary\" ng-class=\"{\'md-inactive\': !mdtPaginationHelper.hasNextPage()}\" aria-label=\"Next page\" ng-click=\"mdtPaginationHelper.nextPage()\">\r\n            <ng-md-icon icon=\"keyboard_arrow_right\" size=\"24\"></ng-md-icon>\r\n        </md-button>\r\n    </div>\r\n</div>");
$templateCache.put("/main/templates/mdtCardHeader.html","<div class=\"mdt-header\" layout=\"row\" layout-align=\"start center\" ng-show=\"isTableCardEnabled\">\r\n    <span flex>{{tableCard.title}}</span>\r\n<!--\r\n    <md-button class=\"md-icon-button md-primary\" aria-label=\"Filter\">\r\n        <ng-md-icon icon=\"filter_list\" size=\"24\"></ng-md-icon>\r\n    </md-button>\r\n    <md-button class=\"md-icon-button md-primary\" aria-label=\"More options\">\r\n        <ng-md-icon icon=\"more_vert\" size=\"24\"></ng-md-icon>\r\n    </md-button>\r\n-->\r\n\r\n    <!-- columnSelectorFeature -->\r\n    <md-button class=\"md-icon-button md-primary mdt-column-chooser-button\"\r\n               aria-label=\"Choose columns\"\r\n               ng-if=\"::columnSelectorFeature.isEnabled\"\r\n               ng-click=\"handleColumnChooserButtonClick()\">\r\n        <ng-md-icon icon=\"settings\" size=\"24\"></ng-md-icon>\r\n    </md-button>\r\n\r\n    <mdt-column-selector ng-if=\"columnSelectorFeature.isEnabled && columnSelectorFeature.isActive\"></mdt-column-selector>\r\n</div>");
$templateCache.put("/main/templates/mdtCheckboxColumnFilter.html","<div class=\"filter-dropdown\">\r\n    <div class=\"md-whiteframe-z2\">\r\n        <md-content class=\"md-body-1\">\r\n            <div layout=\"row\" layout-align=\"end center\" class=\"b-b p-smd md-caption\" ng-if=\"::headerRowData.columnSort.isEnabled\">\r\n                <a href=\"#\" ng-click=\"sortingCallback($event, sortingData)\">Sort A-Z <mdt-sorting-icons size=\"20\" data=\"sortingData\" class=\"p-l-sm\"></mdt-sorting-icons></a>\r\n            </div>\r\n\r\n            <div layout=\"row\" layout-align=\"start center\" class=\"selectall_clearall p-l-md p-t-md p-b-sm\">\r\n                <a href=\"#\" ng-click=\"selectAll($event)\" ng-class=\"{\'disabled\' : selectedItems.length === selectableItems.length}\">Select all</a> <span>-</span> <a href=\"#\" ng-class=\"{\'disabled\' : selectedItems.length === 0}\" ng-click=\"clearAll($event)\">Clear</a>\r\n\r\n                <div class=\"selected_items p-r-md\" flex ng-if=\"selectedItems.length\">{{selectedItems.length}} Selected</div>\r\n            </div>\r\n\r\n            <div layout=\"column\" class=\"p-b-n p-t-sm p-l-md p-r-md filter__scroll\">\r\n                <md-checkbox class=\"md-primary\"\r\n                             ng-repeat=\"item in selectableItems\"\r\n                             ng-checked=\"exists(item)\"\r\n                             ng-click=\"toggle(item)\">\r\n                    {{ transformChip(item) }}\r\n                </md-checkbox>\r\n            </div>\r\n\r\n            <div class=\"p-b-sm p-t-sm p-l-sm\" layout=\"row\" layout-align=\"start center\">\r\n                <md-button class=\"md-raised md-primary\" ng-click=\"confirmCallback({selectedItems: selectedItems, sortingData: sortingData, event: $event})\">Ok</md-button>\r\n                <md-button class=\"md-raised\" ng-click=\"cancelCallback({event: $event})\">Cancel</md-button>\r\n            </div>\r\n        </md-content>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("/main/templates/mdtChipsColumnFilter.html","<div class=\"filter-dropdown\">\r\n    <div class=\"md-whiteframe-z2\">\r\n        <md-content class=\"md-body-1\">\r\n            <div layout=\"row\" layout-align=\"end center\" class=\"b-b p-smd md-caption\" ng-if=\"::headerRowData.columnSort.isEnabled\">\r\n                <a href=\"#\" ng-click=\"sortingCallback($event, sortingData)\">Sort A-Z <mdt-sorting-icons size=\"20\" data=\"sortingData\" class=\"p-l-sm\"></mdt-sorting-icons></a>\r\n            </div>\r\n\r\n            <div class=\"p-md filter__scroll\">\r\n                <md-chips ng-model=\"selectedItems\"\r\n                          md-require-match=\"true\">\r\n\r\n                    <md-autocomplete md-delay=\"300\"\r\n                                     md-autofocus=\"true\"\r\n                                     md-search-text=\"searchText\"\r\n                                     md-items=\"item in headerRowData.columnFilter.valuesProviderCallback(searchText)\"\r\n                                     md-item-text=\"transformChip(item)\"\r\n                                     placeholder=\"{{placeholderText}}\">\r\n\r\n                        <span md-highlight-text=\"searchText\">{{transformChip(item)}}</span>\r\n\r\n                        <md-not-found>\r\n                            No results found.\r\n                        </md-not-found>\r\n                    </md-autocomplete>\r\n\r\n                    <md-chip-template>\r\n                        <span>\r\n                          <strong>{{transformChip($chip)}}</strong>\r\n                        </span>\r\n                    </md-chip-template>\r\n\r\n                </md-chips>\r\n            </div>\r\n\r\n            <div class=\"p-b-sm p-t-sm p-l-sm\" layout=\"row\" layout-align=\"start center\">\r\n                <md-button class=\"md-raised md-primary\" ng-click=\"confirmCallback({selectedItems: selectedItems, sortingData: sortingData, event: $event})\">Ok</md-button>\r\n                <md-button class=\"md-raised\" ng-click=\"cancelCallback({event: $event})\">Cancel</md-button>\r\n            </div>\r\n        </md-content>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("/main/templates/mdtColumnSelector.html","<!-- TODO: change classname -->\r\n<div class=\"mdt-column-selector\">\r\n    <div class=\"md-whiteframe-z2\">\r\n        <md-content class=\"md-body-1\">\r\n            <div class=\"md-subhead p-t-md p-l-md mdt-column-selector-title\" layout=\"row\">\r\n                Columns\r\n            </div>\r\n            <div layout=\"row\" layout-align=\"start center\" class=\"selectall_clearall p-l-md p-t-md p-b-sm\">\r\n                <a href=\"#\" ng-click=\"selectAll($event)\" ng-class=\"{\'disabled\' : isAllSelected()}\">Select all</a> <span>-</span> <a href=\"#\" ng-class=\"{\'disabled\' : isNothingSelected()}\" ng-click=\"clearAll($event)\">Clear</a>\r\n\r\n                <div class=\"selected_items p-r-md\" flex ng-if=\"selectedItems.length\">{{selectedItems.length}} Selected</div>\r\n            </div>\r\n\r\n            <div layout=\"column\" class=\"p-b-n p-t-sm p-l-md p-r-md filter__scroll\">\r\n                <md-checkbox class=\"md-primary mdt-checbox-column-items\"\r\n                             ng-if=\"item.isExcluded == false\"\r\n                             ng-repeat=\"item in headerRowsData\"\r\n                             ng-checked=\"checked(item)\"\r\n                             ng-click=\"toggle(item)\">\r\n                    {{item.columnName}}\r\n                </md-checkbox>\r\n            </div>\r\n\r\n            <div class=\"p-b-sm p-t-sm p-l-sm\" layout=\"row\" layout-align=\"start center\">\r\n                <md-button class=\"md-raised md-primary\" ng-click=\"confirmCallback({paginator: mdtPaginationHelper})\">Ok</md-button>\r\n                <md-button class=\"md-raised\" ng-click=\"cancelCallback()\">Cancel</md-button>\r\n            </div>\r\n        </md-content>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("/main/templates/mdtDropdownColumnFilter.html","<div class=\"filter-dropdown\">\r\n    <div class=\"md-whiteframe-z2\">\r\n        <md-content class=\"md-body-1\">\r\n            <div layout=\"row\" layout-align=\"end center\" class=\"b-b p-smd md-caption\" ng-if=\"::headerRowData.columnSort.isEnabled\">\r\n                <a href=\"#\" ng-click=\"sortingCallback($event, sortingData)\">Sort A-Z <mdt-sorting-icons size=\"20\" data=\"sortingData\" class=\"p-l-sm\"></mdt-sorting-icons></a>\r\n            </div>\r\n\r\n            <div class=\"p-md\">\r\n                <md-input-container class=\"md-block\" flex-gt-sm>\r\n                    <md-select ng-model=\"oneSelectedItem\" placeholder=\"{{placeholderText}}\" ng-change=\"selectedItem()\">\r\n                        <md-option ng-repeat=\"item in selectableItems\" value=\"{{transformChip(item)}}\">\r\n                            {{transformChip(item)}}\r\n                        </md-option>\r\n                    </md-select>\r\n                </md-input-container>\r\n            </div>\r\n\r\n            <div class=\"p-b-sm p-t-sm p-l-sm\" layout=\"row\" layout-align=\"start center\">\r\n                <md-button class=\"md-raised md-primary\" ng-click=\"confirmCallback({selectedItems: selectedItems, sortingData: sortingData, event: $event})\">Ok</md-button>\r\n                <md-button class=\"md-raised\" ng-click=\"cancelCallback({event: $event})\">Cancel</md-button>\r\n            </div>\r\n        </md-content>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("/main/templates/mdtGeneratedHeaderCellContent.html","<div class=\"p-r no-outline column-header-content\" ng-class=\"{\'clickable\': headerRowData.columnSort.isEnabled}\" ng-click=\"columnClickHandler()\">\r\n    <mdt-chips-column-filter\r\n        ng-if=\"headerRowData.columnFilter.isActive && headerRowData.columnFilter.type === \'chips\'\"\r\n        confirm-callback=\"columnFilterFeature.confirmFilterDialog\"\r\n        cancel-callback=\"columnFilterFeature.cancelFilterDialog(event)\"\r\n        header-row-data=\"headerRowData\">\r\n    </mdt-chips-column-filter>\r\n\r\n    <mdt-dropdown-column-filter\r\n        ng-if=\"headerRowData.columnFilter.isActive && headerRowData.columnFilter.type === \'dropdown\'\"\r\n        confirm-callback=\"columnFilterFeature.confirmFilterDialog\"\r\n        cancel-callback=\"columnFilterFeature.cancelFilterDialog(event)\"\r\n        header-row-data=\"headerRowData\">\r\n    </mdt-dropdown-column-filter>\r\n\r\n\r\n    <mdt-checkbox-column-filter\r\n        ng-if=\"headerRowData.columnFilter.isActive && headerRowData.columnFilter.type === \'checkbox\'\"\r\n        confirm-callback=\"columnFilterFeature.confirmFilterDialog\"\r\n        cancel-callback=\"columnFilterFeature.cancelFilterDialog(event)\"\r\n        header-row-data=\"headerRowData\">\r\n    </mdt-checkbox-column-filter>\r\n\r\n    <div ng-if=\"headerRowData.columnSort.isEnabled\">\r\n        <md-tooltip ng-show=\"headerRowData.columnDefinition\">{{headerRowData.columnDefinition}}</md-tooltip>\r\n\r\n        <mdt-sorting-icons size=\"16\" data=\"headerRowData\" ng-show=\"headerRowData.alignRule == \'right\' && !headerRowData.columnFilter.isEnabled\"></mdt-sorting-icons>\r\n\r\n        <span ng-include src=\"\'/main/templates/cells/generateCellValue.html\'\"></span>\r\n\r\n        <mdt-sorting-icons size=\"16\" data=\"headerRowData\" ng-show=\"headerRowData.alignRule == \'left\' && !headerRowData.columnFilter.isEnabled\"></mdt-sorting-icons>\r\n    </div>\r\n    <div ng-if=\"!headerRowData.columnSort.isEnabled\">\r\n        <md-tooltip ng-show=\"headerRowData.columnDefinition\">{{headerRowData.columnDefinition}}</md-tooltip>\r\n\r\n        <span ng-include src=\"\'/main/templates/cells/generateCellValue.html\'\" class=\"no-outline\"></span>\r\n    </div>\r\n</div>");
$templateCache.put("/main/templates/mdtGeneratedHeaderRow.html","<tr class=\"theadTrRow\"\r\n    mdt-animate-sort-icon-handler>\r\n\r\n    <!-- TODO: fix text-align:left, in theory it should not be there to make it work -->\r\n    <th class=\"checkboxCell\"\r\n        style=\"text-align:left;\"\r\n        ng-show=\"selectableRows\"\r\n        mdt-select-all-rows-handler>\r\n\r\n        <md-checkbox aria-label=\"select all\" ng-model=\"selectAllRows\" ng-change=\"onCheckboxChange()\"></md-checkbox>\r\n    </th>\r\n\r\n    <th class=\"column\"\r\n        ng-repeat=\"headerRowData in dataStorage.header track by $index\"\r\n        ng-if=\"!headerRowData.columnSelectorFeature || headerRowData.columnSelectorFeature.isVisible\"\r\n\r\n        mdt-add-align-class=\"headerRowData.alignRule\"\r\n        ng-click=\"clickHandler($index, headerRowData)\"\r\n        md-ink-ripple=\"{{ rippleEffectCallback() }}\">\r\n\r\n        <mdt-generated-header-cell-content index=\"{{$index}}\"></mdt-generated-header-cell-content>\r\n    </th>\r\n</tr>\r\n");
$templateCache.put("/main/templates/mdtTable.html","<md-content class=\"mdtTableContainer md-whiteframe-z1\" ng-cloak>\r\n    <!-- table card -->\r\n    <mdt-card-header ng-hide=\"alternateHeaders && dataStorage.isAnyRowSelected()\"></mdt-card-header>\r\n\r\n    <!-- alternate headers -->\r\n    <mdt-alternate-headers ng-show=\"alternateHeaders && dataStorage.isAnyRowSelected()\"></mdt-alternate-headers>\r\n    <!-- alternate headers end -->\r\n\r\n    <md-content class=\"mdtTable\" layout=\"column\">\r\n        <!-- parsing transcluded content in order to be executed -->\r\n        <div class=\"mdtTable-reader\" style=\"display:none;\"></div>\r\n\r\n        <md-progress-linear md-mode=\"indeterminate\" class=\"loading-indicator\" ng-class=\"{\'loading-is-active\': mdtPaginationHelper.isLoading}\"></md-progress-linear>\r\n\r\n        <ng-include src=\"\'/main/templates/generateTable.html\'\"></ng-include>\r\n    </md-content>\r\n\r\n    <!-- table card -->\r\n    <mdt-card-footer></mdt-card-footer>\r\n    <!-- table card end -->\r\n</md-content>\r\n\r\n<style ng-if=\"::mdtLoadingIndicator\">\r\n    md-progress-linear.loading-indicator .md-bar{\r\n        background: {{mdtLoadingIndicator[\'color\']}};\r\n    }\r\n</style>");
$templateCache.put("/main/templates/smallEditDialog.html","<md-dialog aria-label=\"edit field modal\" layout-padding>\r\n    <md-dialog-content style=\"margin-left:16px;margin-right:16px;\">\r\n        <form ng-submit=\"saveRow()\" name=\"editFieldForm\">\r\n            <md-input-container md-no-float style=\"margin-bottom:0;width:100%;\">\r\n\r\n                <!-- TODO getting placeholder -->\r\n                <input type=\"text\"\r\n                       ng-model=\"cellData.value\"\r\n                       placeholder=\"\"\r\n                       md-maxlength=\"{{cellData.attributes.editableFieldMaxLength}}\" />\r\n            </md-input-container>\r\n        </form>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n");
$templateCache.put("/main/templates/cells/generateCell.html","<!-- editable field -->\r\n<ng-md-icon icon=\"edit\" size=\"16\"\r\n            style=\"cursor:pointer;float:right;height:16px;padding-left:5px;outline: none;\"\r\n            ng-if=\"cellData.attributes.editableField\"\r\n            ng-click=\"showEditDialog($event, cellData, rowData)\"></ng-md-icon>\r\n\r\n<span mdt-add-html-content-to-cell=\"cellData\"\r\n      style=\"cursor:pointer;outline: none;\"\r\n      ng-if=\"cellData.attributes.editableField\"\r\n      ng-click=\"showEditDialog($event, cellData, rowData)\"></span>\r\n\r\n<!-- non editable field -->\r\n<span mdt-add-html-content-to-cell=\"cellData\" ng-if=\"cellData.attributes.editableField == false\"></span>\r\n");
$templateCache.put("/main/templates/cells/generateCellValue.html","<span ng-if=\"!headerRowData.columnFilter.isEnabled\">\r\n    {{headerRowData.columnName}}\r\n</span>\r\n\r\n<span ng-if=\"headerRowData.columnFilter.isEnabled\"\r\n      class=\"filter-select\"\r\n      ng-class=\"{\'is-active\': headerRowData.columnFilter.filtersApplied.length}\">\r\n     {{headerRowData.columnName}}\r\n     <ng-md-icon icon=\"arrow_drop_down\" size=\"24\"></ng-md-icon>\r\n</span>");
$templateCache.put("/main/templates/cells/generateCheckboxCell.html","<md-checkbox aria-label=\"select\" ng-model=\"rowData.optionList.selected\" ng-change=\"onCheckboxChange()\"></md-checkbox>\r\n");
$templateCache.put("/main/templates/cells/generateSortingIcons.html","<span class=\"hoverSortIcons\" ng-if=\"data.columnSort.sort == false\">\r\n    <ng-md-icon icon=\"arrow_forward\" size=\"{{size}}\"></ng-md-icon>\r\n</span>\r\n\r\n<span class=\"sortedColumn\" ng-if=\"data.columnSort.sort !== false\" ng-class=\"data.columnSort.sort === ColumnSortDirectionProvider.ASC ? \'ascending\' : \'descending\'\">\r\n    <ng-md-icon icon=\"arrow_forward\" size=\"{{size}}\"></ng-md-icon>\r\n</span>");
$templateCache.put("/main/templates/rows/errorIndicator.html","<td colspan=\"999\" class=\"errorMessage\">\r\n    <ng-bind-html ng-bind-html=\"mdtPaginationHelper.mdtRowPaginatorErrorMessage\"></ng-bind-html>\r\n</td>\r\n");
$templateCache.put("/main/templates/rows/generateRows.html","<tr class=\"tbodyTrRow\"\r\n    ng-repeat=\"rowData in mdtPaginationHelper.getRows() track by $index\"\r\n    ng-class=\"{\'selectedRow\': rowData.optionList.selected, \'{{rowData.optionList.className}}\': rowData.optionList.className }\"\r\n    ng-show=\"(isPaginationEnabled() === false || rowData.optionList.visible === true) && rowData.optionList.deleted === false\">\r\n\r\n    <td class=\"checkboxCell\" ng-show=\"selectableRows\"\r\n        ng-include=\"\'/main/templates/cells/generateCheckboxCell.html\'\"></td>\r\n\r\n    <td class=\"column\"\r\n        ng-repeat=\"cellData in rowData.data track by $index\"\r\n        ng-if=\"!dataStorage.header[$index].columnSelectorFeature || dataStorage.header[$index].columnSelectorFeature.isVisible\"\r\n        mdt-add-align-class=\"dataStorage.header[$index].alignRule\"\r\n        style=\"position:relative;\"\r\n        ng-include src=\"\'/main/templates/cells/generateCell.html\'\">\r\n        <!-- generate cell content -->\r\n    </td>\r\n</tr>\r\n\r\n<tr ng-show=\"mdtPaginationHelper.isLoadError\"\r\n    ng-include src=\"\'/main/templates/rows/errorIndicator.html\'\"></tr>\r\n\r\n<tr ng-show=\"mdtPaginationHelper.isNoResults && !mdtPaginationHelper.isLoadError\"\r\n    ng-include src=\"\'/main/templates/rows/noResultIndicator.html\'\"></tr>\r\n");
$templateCache.put("/main/templates/rows/generateRowsVirtualRepeat.html","<tr md-virtual-repeat=\"rowData in mdtPaginationHelper.getRows()\"\r\n    ng-class=\"{\'selectedRow\': rowData.optionList.selected}\"\r\n    ng-show=\"(isPaginationEnabled() === false || rowData.optionList.visible === true) && rowData.optionList.deleted === false\">\r\n\r\n    <td class=\"checkboxCell\" ng-show=\"selectableRows\"\r\n        ng-include=\"\'/main/templates/cells/generateCheckboxCell.html\'\"></td>\r\n\r\n    <td class=\"column\"\r\n        ng-repeat=\"cellData in rowData.data track by $index\"\r\n        mdt-add-align-class=\"dataStorage.header[$index].alignRule\"\r\n        style=\"position:relative;\"\r\n        ng-include src=\"\'/main/templates/cells/generateCell.html\'\">\r\n\r\n        <!-- generate cell content -->\r\n    </td>\r\n</tr>\r\n\r\n<tr ng-show=\"mdtPaginationHelper.isLoadError\"\r\n    ng-include src=\"\'/main/templates/rows/errorIndicator.html\'\"></tr>\r\n\r\n<tr ng-show=\"mdtPaginationHelper.isNoResults && !mdtPaginationHelper.isLoadError\"\r\n    ng-include src=\"\'/main/templates/rows/noResultIndicator.html\'\"></tr>\r\n");
$templateCache.put("/main/templates/rows/noResultIndicator.html","<td colspan=\"999\" class=\"noResultMessage\">\r\n    <ng-bind-html ng-bind-html=\"mdtPaginationHelper.mdtRowPaginatorNoResultsMessage\"></ng-bind-html>\r\n</td>\r\n");}]);