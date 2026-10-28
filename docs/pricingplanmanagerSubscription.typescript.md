# `pricingplanmanagerSubscription` Submodule <a name="`pricingplanmanagerSubscription` Submodule" id="@cdktn/provider-aws.pricingplanmanagerSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PricingplanmanagerSubscription <a name="PricingplanmanagerSubscription" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription aws_pricingplanmanager_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

new pricingplanmanagerSubscription.PricingplanmanagerSubscription(scope: Construct, id: string, config: PricingplanmanagerSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig">PricingplanmanagerSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig">PricingplanmanagerSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetApprovalMode">resetApprovalMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetUsageLevel">resetUsageLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: PricingplanmanagerSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---

##### `resetApprovalMode` <a name="resetApprovalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetApprovalMode"></a>

```typescript
public resetApprovalMode(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUsageLevel` <a name="resetUsageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetUsageLevel"></a>

```typescript
public resetUsageLevel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PricingplanmanagerSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PricingplanmanagerSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PricingplanmanagerSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.scheduledChange">scheduledChange</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList">PricingplanmanagerSubscriptionScheduledChangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference">PricingplanmanagerSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalModeInput">approvalModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamilyInput">planFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTierInput">planTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArnsInput">resourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevelInput">usageLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalMode">approvalMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamily">planFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTier">planTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevel">usageLevel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `scheduledChange`<sup>Required</sup> <a name="scheduledChange" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.scheduledChange"></a>

```typescript
public readonly scheduledChange: PricingplanmanagerSubscriptionScheduledChangeList;
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList">PricingplanmanagerSubscriptionScheduledChangeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: PricingplanmanagerSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference">PricingplanmanagerSubscriptionTimeoutsOutputReference</a>

---

##### `approvalModeInput`<sup>Optional</sup> <a name="approvalModeInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalModeInput"></a>

```typescript
public readonly approvalModeInput: string;
```

- *Type:* string

---

##### `planFamilyInput`<sup>Optional</sup> <a name="planFamilyInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamilyInput"></a>

```typescript
public readonly planFamilyInput: string;
```

- *Type:* string

---

##### `planTierInput`<sup>Optional</sup> <a name="planTierInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTierInput"></a>

```typescript
public readonly planTierInput: string;
```

- *Type:* string

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArnsInput"></a>

```typescript
public readonly resourceArnsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PricingplanmanagerSubscriptionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---

##### `usageLevelInput`<sup>Optional</sup> <a name="usageLevelInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevelInput"></a>

```typescript
public readonly usageLevelInput: string;
```

- *Type:* string

---

##### `approvalMode`<sup>Required</sup> <a name="approvalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalMode"></a>

```typescript
public readonly approvalMode: string;
```

- *Type:* string

---

##### `planFamily`<sup>Required</sup> <a name="planFamily" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamily"></a>

```typescript
public readonly planFamily: string;
```

- *Type:* string

---

##### `planTier`<sup>Required</sup> <a name="planTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTier"></a>

```typescript
public readonly planTier: string;
```

- *Type:* string

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

---

##### `usageLevel`<sup>Required</sup> <a name="usageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevel"></a>

```typescript
public readonly usageLevel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PricingplanmanagerSubscriptionConfig <a name="PricingplanmanagerSubscriptionConfig" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.Initializer"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

const pricingplanmanagerSubscriptionConfig: pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planFamily">planFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planTier">planTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.approvalMode">approvalMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.usageLevel">usageLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `planFamily`<sup>Required</sup> <a name="planFamily" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planFamily"></a>

```typescript
public readonly planFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}.

---

##### `planTier`<sup>Required</sup> <a name="planTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planTier"></a>

```typescript
public readonly planTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}.

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}.

---

##### `approvalMode`<sup>Optional</sup> <a name="approvalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.approvalMode"></a>

```typescript
public readonly approvalMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PricingplanmanagerSubscriptionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#timeouts PricingplanmanagerSubscription#timeouts}

---

##### `usageLevel`<sup>Optional</sup> <a name="usageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.usageLevel"></a>

```typescript
public readonly usageLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}.

---

### PricingplanmanagerSubscriptionScheduledChange <a name="PricingplanmanagerSubscriptionScheduledChange" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange.Initializer"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

const pricingplanmanagerSubscriptionScheduledChange: pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange = { ... }
```


### PricingplanmanagerSubscriptionTimeouts <a name="PricingplanmanagerSubscriptionTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.Initializer"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

const pricingplanmanagerSubscriptionTimeouts: pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#create PricingplanmanagerSubscription#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#delete PricingplanmanagerSubscription#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#update PricingplanmanagerSubscription#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PricingplanmanagerSubscriptionScheduledChangeList <a name="PricingplanmanagerSubscriptionScheduledChangeList" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

new pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get"></a>

```typescript
public get(index: number): PricingplanmanagerSubscriptionScheduledChangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PricingplanmanagerSubscriptionScheduledChangeOutputReference <a name="PricingplanmanagerSubscriptionScheduledChangeOutputReference" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

new pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.changeType">changeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.effectiveDate">effectiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.planTier">planTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.usageLevel">usageLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange">PricingplanmanagerSubscriptionScheduledChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeType`<sup>Required</sup> <a name="changeType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.changeType"></a>

```typescript
public readonly changeType: string;
```

- *Type:* string

---

##### `effectiveDate`<sup>Required</sup> <a name="effectiveDate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.effectiveDate"></a>

```typescript
public readonly effectiveDate: string;
```

- *Type:* string

---

##### `planTier`<sup>Required</sup> <a name="planTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.planTier"></a>

```typescript
public readonly planTier: string;
```

- *Type:* string

---

##### `usageLevel`<sup>Required</sup> <a name="usageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.usageLevel"></a>

```typescript
public readonly usageLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PricingplanmanagerSubscriptionScheduledChange;
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange">PricingplanmanagerSubscriptionScheduledChange</a>

---


### PricingplanmanagerSubscriptionTimeoutsOutputReference <a name="PricingplanmanagerSubscriptionTimeoutsOutputReference" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { pricingplanmanagerSubscription } from '@cdktn/provider-aws'

new pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PricingplanmanagerSubscriptionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---



