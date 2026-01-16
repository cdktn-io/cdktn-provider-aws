# `invoicingInvoiceUnit` Submodule <a name="`invoicingInvoiceUnit` Submodule" id="@cdktn/provider-aws.invoicingInvoiceUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InvoicingInvoiceUnit <a name="InvoicingInvoiceUnit" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit aws_invoicing_invoice_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

new invoicingInvoiceUnit.InvoicingInvoiceUnit(scope: Construct, id: string, config: InvoicingInvoiceUnitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig">InvoicingInvoiceUnitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig">InvoicingInvoiceUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTaxInheritanceDisabled">resetTaxInheritanceDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule"></a>

```typescript
public putRule(value: IResolvable | InvoicingInvoiceUnitRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts"></a>

```typescript
public putTimeouts(value: InvoicingInvoiceUnitTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaxInheritanceDisabled` <a name="resetTaxInheritanceDisabled" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTaxInheritanceDisabled"></a>

```typescript
public resetTaxInheritanceDisabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a InvoicingInvoiceUnit resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a InvoicingInvoiceUnit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InvoicingInvoiceUnit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InvoicingInvoiceUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the InvoicingInvoiceUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList">InvoicingInvoiceUnitRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference">InvoicingInvoiceUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiverInput">invoiceReceiverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabledInput">taxInheritanceDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiver">invoiceReceiver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabled">taxInheritanceDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.rule"></a>

```typescript
public readonly rule: InvoicingInvoiceUnitRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList">InvoicingInvoiceUnitRuleList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeouts"></a>

```typescript
public readonly timeouts: InvoicingInvoiceUnitTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference">InvoicingInvoiceUnitTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `invoiceReceiverInput`<sup>Optional</sup> <a name="invoiceReceiverInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiverInput"></a>

```typescript
public readonly invoiceReceiverInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | InvoicingInvoiceUnitRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taxInheritanceDisabledInput`<sup>Optional</sup> <a name="taxInheritanceDisabledInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabledInput"></a>

```typescript
public readonly taxInheritanceDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | InvoicingInvoiceUnitTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `invoiceReceiver`<sup>Required</sup> <a name="invoiceReceiver" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiver"></a>

```typescript
public readonly invoiceReceiver: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taxInheritanceDisabled`<sup>Required</sup> <a name="taxInheritanceDisabled" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabled"></a>

```typescript
public readonly taxInheritanceDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InvoicingInvoiceUnitConfig <a name="InvoicingInvoiceUnitConfig" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.Initializer"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

const invoicingInvoiceUnitConfig: invoicingInvoiceUnit.InvoicingInvoiceUnitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.invoiceReceiver">invoiceReceiver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#tags InvoicingInvoiceUnit#tags}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.taxInheritanceDisabled">taxInheritanceDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `invoiceReceiver`<sup>Required</sup> <a name="invoiceReceiver" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.invoiceReceiver"></a>

```typescript
public readonly invoiceReceiver: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#region InvoicingInvoiceUnit#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | InvoicingInvoiceUnitRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#rule InvoicingInvoiceUnit#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#tags InvoicingInvoiceUnit#tags}.

---

##### `taxInheritanceDisabled`<sup>Optional</sup> <a name="taxInheritanceDisabled" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.taxInheritanceDisabled"></a>

```typescript
public readonly taxInheritanceDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.timeouts"></a>

```typescript
public readonly timeouts: InvoicingInvoiceUnitTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#timeouts InvoicingInvoiceUnit#timeouts}

---

### InvoicingInvoiceUnitRule <a name="InvoicingInvoiceUnitRule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.Initializer"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

const invoicingInvoiceUnitRule: invoicingInvoiceUnit.InvoicingInvoiceUnitRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.property.linkedAccounts">linkedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#linked_accounts InvoicingInvoiceUnit#linked_accounts}. |

---

##### `linkedAccounts`<sup>Required</sup> <a name="linkedAccounts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.property.linkedAccounts"></a>

```typescript
public readonly linkedAccounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#linked_accounts InvoicingInvoiceUnit#linked_accounts}.

---

### InvoicingInvoiceUnitTimeouts <a name="InvoicingInvoiceUnitTimeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.Initializer"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

const invoicingInvoiceUnitTimeouts: invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#create InvoicingInvoiceUnit#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#delete InvoicingInvoiceUnit#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/invoicing_invoice_unit#update InvoicingInvoiceUnit#update}

---

## Classes <a name="Classes" id="Classes"></a>

### InvoicingInvoiceUnitRuleList <a name="InvoicingInvoiceUnitRuleList" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

new invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get"></a>

```typescript
public get(index: number): InvoicingInvoiceUnitRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingInvoiceUnitRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]

---


### InvoicingInvoiceUnitRuleOutputReference <a name="InvoicingInvoiceUnitRuleOutputReference" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

new invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccountsInput">linkedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts">linkedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedAccountsInput`<sup>Optional</sup> <a name="linkedAccountsInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccountsInput"></a>

```typescript
public readonly linkedAccountsInput: string[];
```

- *Type:* string[]

---

##### `linkedAccounts`<sup>Required</sup> <a name="linkedAccounts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts"></a>

```typescript
public readonly linkedAccounts: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingInvoiceUnitRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>

---


### InvoicingInvoiceUnitTimeoutsOutputReference <a name="InvoicingInvoiceUnitTimeoutsOutputReference" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer"></a>

```typescript
import { invoicingInvoiceUnit } from '@cdktn/provider-aws'

new invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingInvoiceUnitTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

---



