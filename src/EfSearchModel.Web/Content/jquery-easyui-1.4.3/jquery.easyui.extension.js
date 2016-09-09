(function ($) {
    //扩展datagrid动态添加/删除editor
    $.extend($.fn.datagrid.methods, {
        addEditor: function (jq, param) {
            if (param instanceof Array) {
                $.each(param, function (index, item) {
                    var e = $(jq).datagrid('getColumnOption', item.field);
                    var changedEditor = item.editor;
                    e.editor = changedEditor;
                });
            } else {
                var e = $(jq).datagrid('getColumnOption', param.field);
                e.editor = param.editor;
            }
        },
        removeEditor: function (jq, param) {
            if (param instanceof Array) {
                $.each(param, function (index, item) {
                    var e = $(jq).datagrid('getColumnOption', item);
                    e.editor = {};
                });
            } else {
                var e = $(jq).datagrid('getColumnOption', param);
                e.editor = {};
            }
        }
    });
    //扩展datagrid动态显示/隐藏row
    $.extend($.fn.datagrid.methods, {
        showRow: function (jq, index) {
            return jq.each(function () {
                var opts = $(this).datagrid('options');
                opts.finder.getTr(this, index).show();
            });
        },
        hideRow: function (jq, index) {
            return jq.each(function () {
                var opts = $(this).datagrid('options');
                opts.finder.getTr(this, index).hide();
            });
        },
        //deleteRow: function (target, index) {
        //    var opts = $.data(target, "datagrid").options;
        //    var data = $.data(target, "datagrid").data;
        //    opts.finder.getTr(target, index).remove();
        //    var gd = $.data(target, "datagrid");
        //    for (var i = index + 1; i < data.rows.length; i++) {
        //        opts.finder.getTr(target, i, "body", 2).attr("datagrid-row-index", i - 1)
        //        .attr("id", gd.rowIdPrefix + "-2-" + (i - 1));
        //        var tr1 = opts.finder.getTr(target, i, "body", 1).attr("datagrid-row-index", i - 1)
        //        .attr("id", gd.rowIdPrefix + "-1-" + (i - 1));
        //        if (opts.rownumbers) {
        //            tr1.find("div.datagrid-cell-rownumber").html(i);
        //        }
        //    }
        //    data.total -= 1;
        //    data.rows.splice(index, 1);
        //}
    });
})(jQuery);