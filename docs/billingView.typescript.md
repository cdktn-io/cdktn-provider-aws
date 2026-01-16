# `billingView` Submodule <a name="`billingView` Submodule" id="@cdktn/provider-aws.billingView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingView <a name="BillingView" id="@cdktn/provider-aws.billingView.BillingView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view aws_billing_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.billingView.BillingView.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

new billingView.BillingView(scope: Construct, id: string, config: BillingViewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig">BillingViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.billingView.BillingView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.billingView.BillingView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.billingView.BillingView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.billingView.BillingViewConfig">BillingViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.putDataFilterExpression">putDataFilterExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.resetDataFilterExpression">resetDataFilterExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.resetSourceViews">resetSourceViews</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.billingView.BillingView.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.billingView.BillingView.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.billingView.BillingView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.billingView.BillingView.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.billingView.BillingView.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.billingView.BillingView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.billingView.BillingView.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.billingView.BillingView.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.billingView.BillingView.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.billingView.BillingView.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.billingView.BillingView.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.billingView.BillingView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.billingView.BillingView.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.billingView.BillingView.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.billingView.BillingView.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.billingView.BillingView.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.billingView.BillingView.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.billingView.BillingView.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.billingView.BillingView.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.billingView.BillingView.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.billingView.BillingView.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.billingView.BillingView.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.billingView.BillingView.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.billingView.BillingView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.billingView.BillingView.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.billingView.BillingView.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.billingView.BillingView.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.billingView.BillingView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.billingView.BillingView.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.billingView.BillingView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.billingView.BillingView.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.billingView.BillingView.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.billingView.BillingView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataFilterExpression` <a name="putDataFilterExpression" id="@cdktn/provider-aws.billingView.BillingView.putDataFilterExpression"></a>

```typescript
public putDataFilterExpression(value: IResolvable | BillingViewDataFilterExpression[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.billingView.BillingView.putDataFilterExpression.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression">BillingViewDataFilterExpression</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.billingView.BillingView.putTimeouts"></a>

```typescript
public putTimeouts(value: BillingViewTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.billingView.BillingView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.billingView.BillingViewTimeouts">BillingViewTimeouts</a>

---

##### `resetDataFilterExpression` <a name="resetDataFilterExpression" id="@cdktn/provider-aws.billingView.BillingView.resetDataFilterExpression"></a>

```typescript
public resetDataFilterExpression(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.billingView.BillingView.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSourceViews` <a name="resetSourceViews" id="@cdktn/provider-aws.billingView.BillingView.resetSourceViews"></a>

```typescript
public resetSourceViews(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.billingView.BillingView.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.billingView.BillingView.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BillingView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.billingView.BillingView.isConstruct"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

billingView.BillingView.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.billingView.BillingView.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.billingView.BillingView.isTerraformElement"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

billingView.BillingView.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.billingView.BillingView.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.billingView.BillingView.isTerraformResource"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

billingView.BillingView.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.billingView.BillingView.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.billingView.BillingView.generateConfigForImport"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

billingView.BillingView.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BillingView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.billingView.BillingView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.billingView.BillingView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BillingView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.billingView.BillingView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BillingView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.billingView.BillingView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BillingView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.billingViewType">billingViewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.dataFilterExpression">dataFilterExpression</a></code> | <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList">BillingViewDataFilterExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.derivedViewCount">derivedViewCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.sourceAccountId">sourceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.sourceViewCount">sourceViewCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference">BillingViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.viewDefinitionLastUpdatedAt">viewDefinitionLastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.dataFilterExpressionInput">dataFilterExpressionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression">BillingViewDataFilterExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.sourceViewsInput">sourceViewsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewTimeouts">BillingViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.sourceViews">sourceViews</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.billingView.BillingView.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.billingView.BillingView.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.billingView.BillingView.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.billingView.BillingView.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.billingView.BillingView.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.billingView.BillingView.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.billingView.BillingView.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.billingView.BillingView.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.billingView.BillingView.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.billingView.BillingView.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.billingView.BillingView.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.billingView.BillingView.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.billingView.BillingView.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.billingView.BillingView.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.billingView.BillingView.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `billingViewType`<sup>Required</sup> <a name="billingViewType" id="@cdktn/provider-aws.billingView.BillingView.property.billingViewType"></a>

```typescript
public readonly billingViewType: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.billingView.BillingView.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataFilterExpression`<sup>Required</sup> <a name="dataFilterExpression" id="@cdktn/provider-aws.billingView.BillingView.property.dataFilterExpression"></a>

```typescript
public readonly dataFilterExpression: BillingViewDataFilterExpressionList;
```

- *Type:* <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList">BillingViewDataFilterExpressionList</a>

---

##### `derivedViewCount`<sup>Required</sup> <a name="derivedViewCount" id="@cdktn/provider-aws.billingView.BillingView.property.derivedViewCount"></a>

```typescript
public readonly derivedViewCount: number;
```

- *Type:* number

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-aws.billingView.BillingView.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `sourceAccountId`<sup>Required</sup> <a name="sourceAccountId" id="@cdktn/provider-aws.billingView.BillingView.property.sourceAccountId"></a>

```typescript
public readonly sourceAccountId: string;
```

- *Type:* string

---

##### `sourceViewCount`<sup>Required</sup> <a name="sourceViewCount" id="@cdktn/provider-aws.billingView.BillingView.property.sourceViewCount"></a>

```typescript
public readonly sourceViewCount: number;
```

- *Type:* number

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.billingView.BillingView.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.billingView.BillingView.property.timeouts"></a>

```typescript
public readonly timeouts: BillingViewTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference">BillingViewTimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.billingView.BillingView.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `viewDefinitionLastUpdatedAt`<sup>Required</sup> <a name="viewDefinitionLastUpdatedAt" id="@cdktn/provider-aws.billingView.BillingView.property.viewDefinitionLastUpdatedAt"></a>

```typescript
public readonly viewDefinitionLastUpdatedAt: string;
```

- *Type:* string

---

##### `dataFilterExpressionInput`<sup>Optional</sup> <a name="dataFilterExpressionInput" id="@cdktn/provider-aws.billingView.BillingView.property.dataFilterExpressionInput"></a>

```typescript
public readonly dataFilterExpressionInput: IResolvable | BillingViewDataFilterExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression">BillingViewDataFilterExpression</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.billingView.BillingView.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.billingView.BillingView.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceViewsInput`<sup>Optional</sup> <a name="sourceViewsInput" id="@cdktn/provider-aws.billingView.BillingView.property.sourceViewsInput"></a>

```typescript
public readonly sourceViewsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.billingView.BillingView.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.billingView.BillingView.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BillingViewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewTimeouts">BillingViewTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.billingView.BillingView.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.billingView.BillingView.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceViews`<sup>Required</sup> <a name="sourceViews" id="@cdktn/provider-aws.billingView.BillingView.property.sourceViews"></a>

```typescript
public readonly sourceViews: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.billingView.BillingView.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingView.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.billingView.BillingView.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingViewConfig <a name="BillingViewConfig" id="@cdktn/provider-aws.billingView.BillingViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.billingView.BillingViewConfig.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

const billingViewConfig: billingView.BillingViewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#name BillingView#name}. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.dataFilterExpression">dataFilterExpression</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression">BillingViewDataFilterExpression</a>[]</code> | data_filter_expression block. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#description BillingView#description}. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.sourceViews">sourceViews</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#source_views BillingView#source_views}. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#tags BillingView#tags}. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeouts">BillingViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#name BillingView#name}.

---

##### `dataFilterExpression`<sup>Optional</sup> <a name="dataFilterExpression" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.dataFilterExpression"></a>

```typescript
public readonly dataFilterExpression: IResolvable | BillingViewDataFilterExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression">BillingViewDataFilterExpression</a>[]

data_filter_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#data_filter_expression BillingView#data_filter_expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#description BillingView#description}.

---

##### `sourceViews`<sup>Optional</sup> <a name="sourceViews" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.sourceViews"></a>

```typescript
public readonly sourceViews: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#source_views BillingView#source_views}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#tags BillingView#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.billingView.BillingViewConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BillingViewTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.billingView.BillingViewTimeouts">BillingViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#timeouts BillingView#timeouts}

---

### BillingViewDataFilterExpression <a name="BillingViewDataFilterExpression" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpression.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

const billingViewDataFilterExpression: billingView.BillingViewDataFilterExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions">BillingViewDataFilterExpressionDimensions</a>[]</code> | dimensions block. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags">BillingViewDataFilterExpressionTags</a>[]</code> | tags block. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression.property.timeRange">timeRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange">BillingViewDataFilterExpressionTimeRange</a>[]</code> | time_range block. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpression.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | BillingViewDataFilterExpressionDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions">BillingViewDataFilterExpressionDimensions</a>[]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#dimensions BillingView#dimensions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpression.property.tags"></a>

```typescript
public readonly tags: IResolvable | BillingViewDataFilterExpressionTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags">BillingViewDataFilterExpressionTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#tags BillingView#tags}

---

##### `timeRange`<sup>Optional</sup> <a name="timeRange" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpression.property.timeRange"></a>

```typescript
public readonly timeRange: IResolvable | BillingViewDataFilterExpressionTimeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange">BillingViewDataFilterExpressionTimeRange</a>[]

time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#time_range BillingView#time_range}

---

### BillingViewDataFilterExpressionDimensions <a name="BillingViewDataFilterExpressionDimensions" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

const billingViewDataFilterExpressionDimensions: billingView.BillingViewDataFilterExpressionDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#key BillingView#key}. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#values BillingView#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#key BillingView#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#values BillingView#values}.

---

### BillingViewDataFilterExpressionTags <a name="BillingViewDataFilterExpressionTags" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

const billingViewDataFilterExpressionTags: billingView.BillingViewDataFilterExpressionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#key BillingView#key}. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#values BillingView#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#key BillingView#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#values BillingView#values}.

---

### BillingViewDataFilterExpressionTimeRange <a name="BillingViewDataFilterExpressionTimeRange" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

const billingViewDataFilterExpressionTimeRange: billingView.BillingViewDataFilterExpressionTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange.property.beginDateInclusive">beginDateInclusive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#begin_date_inclusive BillingView#begin_date_inclusive}. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange.property.endDateInclusive">endDateInclusive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#end_date_inclusive BillingView#end_date_inclusive}. |

---

##### `beginDateInclusive`<sup>Required</sup> <a name="beginDateInclusive" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange.property.beginDateInclusive"></a>

```typescript
public readonly beginDateInclusive: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#begin_date_inclusive BillingView#begin_date_inclusive}.

---

##### `endDateInclusive`<sup>Required</sup> <a name="endDateInclusive" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange.property.endDateInclusive"></a>

```typescript
public readonly endDateInclusive: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#end_date_inclusive BillingView#end_date_inclusive}.

---

### BillingViewTimeouts <a name="BillingViewTimeouts" id="@cdktn/provider-aws.billingView.BillingViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.billingView.BillingViewTimeouts.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

const billingViewTimeouts: billingView.BillingViewTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.billingView.BillingViewTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#create BillingView#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.billingView.BillingViewTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#delete BillingView#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.billingView.BillingViewTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/billing_view#update BillingView#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BillingViewDataFilterExpressionDimensionsList <a name="BillingViewDataFilterExpressionDimensionsList" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

new billingView.BillingViewDataFilterExpressionDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.get"></a>

```typescript
public get(index: number): BillingViewDataFilterExpressionDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions">BillingViewDataFilterExpressionDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingViewDataFilterExpressionDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions">BillingViewDataFilterExpressionDimensions</a>[]

---


### BillingViewDataFilterExpressionDimensionsOutputReference <a name="BillingViewDataFilterExpressionDimensionsOutputReference" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

new billingView.BillingViewDataFilterExpressionDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions">BillingViewDataFilterExpressionDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingViewDataFilterExpressionDimensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions">BillingViewDataFilterExpressionDimensions</a>

---


### BillingViewDataFilterExpressionList <a name="BillingViewDataFilterExpressionList" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

new billingView.BillingViewDataFilterExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.get"></a>

```typescript
public get(index: number): BillingViewDataFilterExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression">BillingViewDataFilterExpression</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingViewDataFilterExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression">BillingViewDataFilterExpression</a>[]

---


### BillingViewDataFilterExpressionOutputReference <a name="BillingViewDataFilterExpressionOutputReference" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

new billingView.BillingViewDataFilterExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.putTimeRange">putTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.resetTimeRange">resetTimeRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | BillingViewDataFilterExpressionDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions">BillingViewDataFilterExpressionDimensions</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | BillingViewDataFilterExpressionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags">BillingViewDataFilterExpressionTags</a>[]

---

##### `putTimeRange` <a name="putTimeRange" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.putTimeRange"></a>

```typescript
public putTimeRange(value: IResolvable | BillingViewDataFilterExpressionTimeRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.putTimeRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange">BillingViewDataFilterExpressionTimeRange</a>[]

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeRange` <a name="resetTimeRange" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.resetTimeRange"></a>

```typescript
public resetTimeRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList">BillingViewDataFilterExpressionDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList">BillingViewDataFilterExpressionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.timeRange">timeRange</a></code> | <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList">BillingViewDataFilterExpressionTimeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions">BillingViewDataFilterExpressionDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags">BillingViewDataFilterExpressionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.timeRangeInput">timeRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange">BillingViewDataFilterExpressionTimeRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression">BillingViewDataFilterExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: BillingViewDataFilterExpressionDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensionsList">BillingViewDataFilterExpressionDimensionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.tags"></a>

```typescript
public readonly tags: BillingViewDataFilterExpressionTagsList;
```

- *Type:* <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList">BillingViewDataFilterExpressionTagsList</a>

---

##### `timeRange`<sup>Required</sup> <a name="timeRange" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.timeRange"></a>

```typescript
public readonly timeRange: BillingViewDataFilterExpressionTimeRangeList;
```

- *Type:* <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList">BillingViewDataFilterExpressionTimeRangeList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | BillingViewDataFilterExpressionDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionDimensions">BillingViewDataFilterExpressionDimensions</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BillingViewDataFilterExpressionTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags">BillingViewDataFilterExpressionTags</a>[]

---

##### `timeRangeInput`<sup>Optional</sup> <a name="timeRangeInput" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.timeRangeInput"></a>

```typescript
public readonly timeRangeInput: IResolvable | BillingViewDataFilterExpressionTimeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange">BillingViewDataFilterExpressionTimeRange</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingViewDataFilterExpression;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpression">BillingViewDataFilterExpression</a>

---


### BillingViewDataFilterExpressionTagsList <a name="BillingViewDataFilterExpressionTagsList" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

new billingView.BillingViewDataFilterExpressionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.get"></a>

```typescript
public get(index: number): BillingViewDataFilterExpressionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags">BillingViewDataFilterExpressionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingViewDataFilterExpressionTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags">BillingViewDataFilterExpressionTags</a>[]

---


### BillingViewDataFilterExpressionTagsOutputReference <a name="BillingViewDataFilterExpressionTagsOutputReference" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

new billingView.BillingViewDataFilterExpressionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags">BillingViewDataFilterExpressionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingViewDataFilterExpressionTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTags">BillingViewDataFilterExpressionTags</a>

---


### BillingViewDataFilterExpressionTimeRangeList <a name="BillingViewDataFilterExpressionTimeRangeList" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

new billingView.BillingViewDataFilterExpressionTimeRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.get"></a>

```typescript
public get(index: number): BillingViewDataFilterExpressionTimeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange">BillingViewDataFilterExpressionTimeRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingViewDataFilterExpressionTimeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange">BillingViewDataFilterExpressionTimeRange</a>[]

---


### BillingViewDataFilterExpressionTimeRangeOutputReference <a name="BillingViewDataFilterExpressionTimeRangeOutputReference" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

new billingView.BillingViewDataFilterExpressionTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusiveInput">beginDateInclusiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusiveInput">endDateInclusiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusive">beginDateInclusive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusive">endDateInclusive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange">BillingViewDataFilterExpressionTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `beginDateInclusiveInput`<sup>Optional</sup> <a name="beginDateInclusiveInput" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusiveInput"></a>

```typescript
public readonly beginDateInclusiveInput: string;
```

- *Type:* string

---

##### `endDateInclusiveInput`<sup>Optional</sup> <a name="endDateInclusiveInput" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusiveInput"></a>

```typescript
public readonly endDateInclusiveInput: string;
```

- *Type:* string

---

##### `beginDateInclusive`<sup>Required</sup> <a name="beginDateInclusive" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusive"></a>

```typescript
public readonly beginDateInclusive: string;
```

- *Type:* string

---

##### `endDateInclusive`<sup>Required</sup> <a name="endDateInclusive" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusive"></a>

```typescript
public readonly endDateInclusive: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingViewDataFilterExpressionTimeRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewDataFilterExpressionTimeRange">BillingViewDataFilterExpressionTimeRange</a>

---


### BillingViewTimeoutsOutputReference <a name="BillingViewTimeoutsOutputReference" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.Initializer"></a>

```typescript
import { billingView } from '@cdktn/provider-aws'

new billingView.BillingViewTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.billingView.BillingViewTimeouts">BillingViewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.billingView.BillingViewTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingViewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.billingView.BillingViewTimeouts">BillingViewTimeouts</a>

---



