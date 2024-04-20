# 07 Runtime Best Practices

<!-- TOC -->

- [Using for track](#using-for-track)
- [Using Virtual Scrolling](#using-virtual-scrolling)
- [Unsubscribing RxJS subscriptions](#unsubscribing-rxjs-subscriptions)
<!-- TOC -->

## Using @for track

When you resubmit the same search, you will find out that `@for` will repaint all items from scratch. This is not necessary, instead we could reuse our existing items by setting an intelligent `track`.

**Important note**: With the new control flow syntax live got really easy.

1. Open the `flight-search.component.html` and look for the line that uses `@for`.

2. Set the `track` function in the `@for` loop.

   ```html
   @for (flight of flights; track flight.id) [...]
   ```

Try resubmitting the same search again and interpret your findings.

## Using Virtual Scrolling

1. To be able to use the Virtual Scrolling we need to install `@angular/cdk` first:

   `npm i @angular/cdk` or `yarn @angular/cdk` or `pnpm i @angular/cdk`

2. Now we need to import the `CdkFixedSizeVirtualScroll`, `CdkVirtualForOf` and `CdkVirtualScrollViewport` into the `ChartsComponent`:

   ```typescript
   imports: [ChartComponent, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
   ```

3. Also, in the `charts.component.ts` we want to change the count of charts from 8 to something bigger. We also need to adjust the data structure to have 4 columns in the chart rows. Here is an example of how to do this:

   ```typescript
   chartRowsCount = 27; // 27 * 4 = 108
   chartRows: {
     col1: { id: number; data: string };
     col2: { id: number; data: string };
     col3: { id: number; data: string };
     col4: { id: number; data: string };
   }[] = [];

   constructor() {
     for (let index = 0; index < this.chartRowsCount; index++) {
       this.chartRows.push({
         col1: { id: index * 4, data: 'data1' },
         col2: { id: index * 4 + 1, data: 'data2' },
         col3: { id: index * 4 + 2, data: 'data3' },
         col4: { id: index * 4 + 3, data: 'data4' },
       });
     }
   }
   ```

4. In the components view template `charts.component.html` we need to replace the `div.row` with a virtual scrolling viewport:

   ```html
   <cdk-virtual-scroll-viewport itemSize="264" class="viewport">
     <div *cdkVirtualFor="let chart of chartRows; let index = index" [id]="'row_' + index" class="row">
       <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
         <app-chart [id]="chart.col1.id" [data]="chart.col1.data" />
       </div>
       <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
         <app-chart [id]="chart.col2.id" [data]="chart.col2.data" />
       </div>
       <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
         <app-chart [id]="chart.col3.id" [data]="chart.col3.data" />
       </div>
       <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
         <app-chart [id]="chart.col4.id" [data]="chart.col4.data" />
       </div>
     </div>
   </cdk-virtual-scroll-viewport>
   ```

   Please note: By adding the height of each item as `itemSize` in `px` we can optimize performance. Since we have 4 columns we need to divide the real height by 4 here to get a useful value here.

5. Finally, in the `charts.component.scss` we need set a height for the with virtual scrolling viewport:

   ```scss
   .viewport {
     width: 100%;
     height: calc(100vh - 280px);
   }
   ```

6. Check your solution and look into the DevTools Elements tab to see if the virtual scrolling is working!

## RxJS subscription management

Open the `flight-edit.component.ts` and look for subscriptions. You should find at least three of them ;-)

Do you still remember which one does not have to be managed?

Unsubscribe the other two by using at least one of the recommended methods:

1. If possible using the `AsyncPipe` (if that's possible - I don't think so ...)
2. Else use the Angular 16's new `takeUntilDestroyed()`

You should at least once use the `takeUntilDestroyed()`.

Hint: If you're calling that operator in the `constructor`, you don't need a `DestroyRef`.

Help: If you need a reference open `flight-search.component.ts` - there you'll find the two introduced methods of unsubscribing.
