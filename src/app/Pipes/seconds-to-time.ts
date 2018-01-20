import {PipeTransform} from '@angular/core';

export class SecondsToTimePipe implements PipeTransform {
  transform (TotalSeconds) {
    let hours: number | string = Math.floor(TotalSeconds / 3600 );
    let minutes: number | string = Math.floor( (TotalSeconds - hours * 3600) / 60 );
    let seconds: number | string = TotalSeconds - hours * 3600 - minutes * 60;

    hours = hours < 10 ? 0 + '' + hours : hours;
    minutes = minutes < 10 ? 0 + '' + minutes : minutes;
    seconds = seconds < 10 ? 0 + '' + seconds : seconds;

    return hours + ':' + minutes +  ':' + seconds;
  }
}
