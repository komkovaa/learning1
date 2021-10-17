$(function(){
    $('td').click(whoIs);
});

function whoIs(e) {
    let hlpstr = '';
    hlpstr += 'This is ' + e.target.id + '. ';
    let hlpcls = e.target.classList;
    if (!hlpcls.contains('white') && !hlpcls.contains('black')) {
        hlpstr += 'Empty here.';
    } else {
        if (hlpcls.contains('white')) {
            hlpstr += 'White '
        } else {
            hlpstr += 'Black '
        }
        if (hlpcls.contains('king')) {
            hlpstr += 'king here.'
        } else if (hlpcls.contains('queen')) {
            hlpstr += 'queen here.'
        } else if (hlpcls.contains('rook')) {
            hlpstr += 'rook here.'
        } else if (hlpcls.contains('bishop')) {
            hlpstr += 'bishop here.'
        } else if (hlpcls.contains('knight')) {
            hlpstr += 'knight here.'
        } else {
            hlpstr += 'pawn here.';
        }
    }
    console.log(hlpstr);
};


    // По клику на клетке пометить ее классом stepfrom.
    // Если на кликнутой клетке уже есть такой класс, просто убрать его.
	// Если есть другая клетка с этим классом, пометить кликнутую клетку классом stepto.
	// Если на кликнутой клетке есть класс stepto, просто убрать его.
	// Если на доске уже есть другая клетка с классом stepto, убрать классы stepfrom и stepto с ранее помеченных клеток, кликнутую пометить классом stepfrom.
$(function(){
	$('td').click(markStep);
});
	function markStep(e) {
	
				if ($('td').hasClass('stepfrom') && $('td').hasClass('stepto')) {
					$('td').removeClass('stepfrom') && $('td').removeClass('stepto') && $( this ).toggleClass('stepfrom');
					} else {
						if ($( this ).hasClass('stepfrom')) {
							$( this ).removeClass('stepfrom');
							} else {
								if ($('td').hasClass('stepfrom')) {
									$( this ).toggleClass('stepto');
									} else {
										$( this ).toggleClass('stepfrom');
										};	
						
								};
						};
				// Если после всех манипуляций на доске остались клетки с классами stepfrom и steptoб вывести в консоль объект вида {stepfrom: <cell id>, stepto: <cell id>}
				if ($('td').hasClass('stepfrom') && $('td').hasClass('stepto')) {
					console.log("stepfrom: " +  "cell " + '');
					console.log("stepto: " +  "cell " + this.id);
					};
	}
		
	
    
