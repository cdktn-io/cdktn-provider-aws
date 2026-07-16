# `arczonalshiftAutoshiftObserverNotificationStatus` Submodule <a name="`arczonalshiftAutoshiftObserverNotificationStatus` Submodule" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArczonalshiftAutoshiftObserverNotificationStatus <a name="ArczonalshiftAutoshiftObserverNotificationStatus" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/arczonalshift_autoshift_observer_notification_status aws_arczonalshift_autoshift_observer_notification_status}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.Initializer"></a>

```typescript
import { arczonalshiftAutoshiftObserverNotificationStatus } from '@cdktn/provider-aws'

new arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus(scope: Construct, id: string, config: ArczonalshiftAutoshiftObserverNotificationStatusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig">ArczonalshiftAutoshiftObserverNotificationStatusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig">ArczonalshiftAutoshiftObserverNotificationStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ArczonalshiftAutoshiftObserverNotificationStatus resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isConstruct"></a>

```typescript
import { arczonalshiftAutoshiftObserverNotificationStatus } from '@cdktn/provider-aws'

arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isTerraformElement"></a>

```typescript
import { arczonalshiftAutoshiftObserverNotificationStatus } from '@cdktn/provider-aws'

arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isTerraformResource"></a>

```typescript
import { arczonalshiftAutoshiftObserverNotificationStatus } from '@cdktn/provider-aws'

arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.generateConfigForImport"></a>

```typescript
import { arczonalshiftAutoshiftObserverNotificationStatus } from '@cdktn/provider-aws'

arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ArczonalshiftAutoshiftObserverNotificationStatus resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArczonalshiftAutoshiftObserverNotificationStatus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArczonalshiftAutoshiftObserverNotificationStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/arczonalshift_autoshift_observer_notification_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ArczonalshiftAutoshiftObserverNotificationStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArczonalshiftAutoshiftObserverNotificationStatusConfig <a name="ArczonalshiftAutoshiftObserverNotificationStatusConfig" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.Initializer"></a>

```typescript
import { arczonalshiftAutoshiftObserverNotificationStatus } from '@cdktn/provider-aws'

const arczonalshiftAutoshiftObserverNotificationStatusConfig: arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/arczonalshift_autoshift_observer_notification_status#status ArczonalshiftAutoshiftObserverNotificationStatus#status}. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/arczonalshift_autoshift_observer_notification_status#status ArczonalshiftAutoshiftObserverNotificationStatus#status}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.arczonalshiftAutoshiftObserverNotificationStatus.ArczonalshiftAutoshiftObserverNotificationStatusConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/arczonalshift_autoshift_observer_notification_status#region ArczonalshiftAutoshiftObserverNotificationStatus#region}

---



