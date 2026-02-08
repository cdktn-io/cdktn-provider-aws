# `savingsplansSavingsPlan` Submodule <a name="`savingsplansSavingsPlan` Submodule" id="@cdktn/provider-aws.savingsplansSavingsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SavingsplansSavingsPlan <a name="SavingsplansSavingsPlan" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan aws_savingsplans_savings_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer"></a>

```typescript
import { savingsplansSavingsPlan } from '@cdktn/provider-aws'

new savingsplansSavingsPlan.SavingsplansSavingsPlan(scope: Construct, id: string, config: SavingsplansSavingsPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig">SavingsplansSavingsPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig">SavingsplansSavingsPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetPurchaseTime">resetPurchaseTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetUpfrontPaymentAmount">resetUpfrontPaymentAmount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts"></a>

```typescript
public putTimeouts(value: SavingsplansSavingsPlanTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---

##### `resetPurchaseTime` <a name="resetPurchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetPurchaseTime"></a>

```typescript
public resetPurchaseTime(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpfrontPaymentAmount` <a name="resetUpfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetUpfrontPaymentAmount"></a>

```typescript
public resetUpfrontPaymentAmount(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct"></a>

```typescript
import { savingsplansSavingsPlan } from '@cdktn/provider-aws'

savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement"></a>

```typescript
import { savingsplansSavingsPlan } from '@cdktn/provider-aws'

savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource"></a>

```typescript
import { savingsplansSavingsPlan } from '@cdktn/provider-aws'

savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport"></a>

```typescript
import { savingsplansSavingsPlan } from '@cdktn/provider-aws'

savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SavingsplansSavingsPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SavingsplansSavingsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SavingsplansSavingsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.currency">currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.ec2InstanceFamily">ec2InstanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.offeringId">offeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.paymentOption">paymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.productTypes">productTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.recurringPaymentAmount">recurringPaymentAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.returnableUntil">returnableUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanArn">savingsPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanId">savingsPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanType">savingsPlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.termDurationInSeconds">termDurationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference">SavingsplansSavingsPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitmentInput">commitmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTimeInput">purchaseTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingIdInput">savingsPlanOfferingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmountInput">upfrontPaymentAmountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitment">commitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTime">purchaseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingId">savingsPlanOfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmount">upfrontPaymentAmount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ec2InstanceFamily`<sup>Required</sup> <a name="ec2InstanceFamily" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.ec2InstanceFamily"></a>

```typescript
public readonly ec2InstanceFamily: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.offeringId"></a>

```typescript
public readonly offeringId: string;
```

- *Type:* string

---

##### `paymentOption`<sup>Required</sup> <a name="paymentOption" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.paymentOption"></a>

```typescript
public readonly paymentOption: string;
```

- *Type:* string

---

##### `productTypes`<sup>Required</sup> <a name="productTypes" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.productTypes"></a>

```typescript
public readonly productTypes: string[];
```

- *Type:* string[]

---

##### `recurringPaymentAmount`<sup>Required</sup> <a name="recurringPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.recurringPaymentAmount"></a>

```typescript
public readonly recurringPaymentAmount: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `returnableUntil`<sup>Required</sup> <a name="returnableUntil" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.returnableUntil"></a>

```typescript
public readonly returnableUntil: string;
```

- *Type:* string

---

##### `savingsPlanArn`<sup>Required</sup> <a name="savingsPlanArn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanArn"></a>

```typescript
public readonly savingsPlanArn: string;
```

- *Type:* string

---

##### `savingsPlanId`<sup>Required</sup> <a name="savingsPlanId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanId"></a>

```typescript
public readonly savingsPlanId: string;
```

- *Type:* string

---

##### `savingsPlanType`<sup>Required</sup> <a name="savingsPlanType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanType"></a>

```typescript
public readonly savingsPlanType: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `termDurationInSeconds`<sup>Required</sup> <a name="termDurationInSeconds" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.termDurationInSeconds"></a>

```typescript
public readonly termDurationInSeconds: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeouts"></a>

```typescript
public readonly timeouts: SavingsplansSavingsPlanTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference">SavingsplansSavingsPlanTimeoutsOutputReference</a>

---

##### `commitmentInput`<sup>Optional</sup> <a name="commitmentInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitmentInput"></a>

```typescript
public readonly commitmentInput: string;
```

- *Type:* string

---

##### `purchaseTimeInput`<sup>Optional</sup> <a name="purchaseTimeInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTimeInput"></a>

```typescript
public readonly purchaseTimeInput: string;
```

- *Type:* string

---

##### `savingsPlanOfferingIdInput`<sup>Optional</sup> <a name="savingsPlanOfferingIdInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingIdInput"></a>

```typescript
public readonly savingsPlanOfferingIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SavingsplansSavingsPlanTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---

##### `upfrontPaymentAmountInput`<sup>Optional</sup> <a name="upfrontPaymentAmountInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmountInput"></a>

```typescript
public readonly upfrontPaymentAmountInput: string;
```

- *Type:* string

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitment"></a>

```typescript
public readonly commitment: string;
```

- *Type:* string

---

##### `purchaseTime`<sup>Required</sup> <a name="purchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTime"></a>

```typescript
public readonly purchaseTime: string;
```

- *Type:* string

---

##### `savingsPlanOfferingId`<sup>Required</sup> <a name="savingsPlanOfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingId"></a>

```typescript
public readonly savingsPlanOfferingId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `upfrontPaymentAmount`<sup>Required</sup> <a name="upfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmount"></a>

```typescript
public readonly upfrontPaymentAmount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SavingsplansSavingsPlanConfig <a name="SavingsplansSavingsPlanConfig" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.Initializer"></a>

```typescript
import { savingsplansSavingsPlan } from '@cdktn/provider-aws'

const savingsplansSavingsPlanConfig: savingsplansSavingsPlan.SavingsplansSavingsPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.commitment">commitment</a></code> | <code>string</code> | The hourly commitment, in USD. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.savingsPlanOfferingId">savingsPlanOfferingId</a></code> | <code>string</code> | The unique ID of a Savings Plan offering. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.purchaseTime">purchaseTime</a></code> | <code>string</code> | The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.upfrontPaymentAmount">upfrontPaymentAmount</a></code> | <code>string</code> | The up-front payment amount. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.commitment"></a>

```typescript
public readonly commitment: string;
```

- *Type:* string

The hourly commitment, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#commitment SavingsplansSavingsPlan#commitment}

---

##### `savingsPlanOfferingId`<sup>Required</sup> <a name="savingsPlanOfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.savingsPlanOfferingId"></a>

```typescript
public readonly savingsPlanOfferingId: string;
```

- *Type:* string

The unique ID of a Savings Plan offering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#savings_plan_offering_id SavingsplansSavingsPlan#savings_plan_offering_id}

---

##### `purchaseTime`<sup>Optional</sup> <a name="purchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.purchaseTime"></a>

```typescript
public readonly purchaseTime: string;
```

- *Type:* string

The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#purchase_time SavingsplansSavingsPlan#purchase_time}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SavingsplansSavingsPlanTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#timeouts SavingsplansSavingsPlan#timeouts}

---

##### `upfrontPaymentAmount`<sup>Optional</sup> <a name="upfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.upfrontPaymentAmount"></a>

```typescript
public readonly upfrontPaymentAmount: string;
```

- *Type:* string

The up-front payment amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#upfront_payment_amount SavingsplansSavingsPlan#upfront_payment_amount}

---

### SavingsplansSavingsPlanTimeouts <a name="SavingsplansSavingsPlanTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.Initializer"></a>

```typescript
import { savingsplansSavingsPlan } from '@cdktn/provider-aws'

const savingsplansSavingsPlanTimeouts: savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#create SavingsplansSavingsPlan#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#delete SavingsplansSavingsPlan#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### SavingsplansSavingsPlanTimeoutsOutputReference <a name="SavingsplansSavingsPlanTimeoutsOutputReference" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer"></a>

```typescript
import { savingsplansSavingsPlan } from '@cdktn/provider-aws'

new savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SavingsplansSavingsPlanTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---



