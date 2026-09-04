# `networkfirewallContainerAssociation` Submodule <a name="`networkfirewallContainerAssociation` Submodule" id="@cdktn/provider-aws.networkfirewallContainerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallContainerAssociation <a name="NetworkfirewallContainerAssociation" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association aws_networkfirewall_container_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociation(scope: Construct, id: string, config: NetworkfirewallContainerAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig">NetworkfirewallContainerAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig">NetworkfirewallContainerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfiguration">putContainerMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetContainerMonitoringConfiguration">resetContainerMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainerMonitoringConfiguration` <a name="putContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfiguration"></a>

```typescript
public putContainerMonitoringConfiguration(value: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkfirewallContainerAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

---

##### `resetContainerMonitoringConfiguration` <a name="resetContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetContainerMonitoringConfiguration"></a>

```typescript
public resetContainerMonitoringConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkfirewallContainerAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkfirewallContainerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallContainerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn">containerAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfiguration">containerMonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount">resolvedCidrCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference">NetworkfirewallContainerAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.updateToken">updateToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput">containerAssociationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationInput">containerMonitoringConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName">containerAssociationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containerAssociationArn`<sup>Required</sup> <a name="containerAssociationArn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn"></a>

```typescript
public readonly containerAssociationArn: string;
```

- *Type:* string

---

##### `containerMonitoringConfiguration`<sup>Required</sup> <a name="containerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfiguration"></a>

```typescript
public readonly containerMonitoringConfiguration: NetworkfirewallContainerAssociationContainerMonitoringConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationList</a>

---

##### `resolvedCidrCount`<sup>Required</sup> <a name="resolvedCidrCount" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount"></a>

```typescript
public readonly resolvedCidrCount: number;
```

- *Type:* number

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkfirewallContainerAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference">NetworkfirewallContainerAssociationTimeoutsOutputReference</a>

---

##### `updateToken`<sup>Required</sup> <a name="updateToken" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.updateToken"></a>

```typescript
public readonly updateToken: string;
```

- *Type:* string

---

##### `containerAssociationNameInput`<sup>Optional</sup> <a name="containerAssociationNameInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput"></a>

```typescript
public readonly containerAssociationNameInput: string;
```

- *Type:* string

---

##### `containerMonitoringConfigurationInput`<sup>Optional</sup> <a name="containerMonitoringConfigurationInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationInput"></a>

```typescript
public readonly containerMonitoringConfigurationInput: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkfirewallContainerAssociationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `containerAssociationName`<sup>Required</sup> <a name="containerAssociationName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName"></a>

```typescript
public readonly containerAssociationName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallContainerAssociationConfig <a name="NetworkfirewallContainerAssociationConfig" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

const networkfirewallContainerAssociationConfig: networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName">containerAssociationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfiguration">containerMonitoringConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]</code> | container_monitoring_configuration block. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containerAssociationName`<sup>Required</sup> <a name="containerAssociationName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName"></a>

```typescript
public readonly containerAssociationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}.

---

##### `containerMonitoringConfiguration`<sup>Optional</sup> <a name="containerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfiguration"></a>

```typescript
public readonly containerMonitoringConfiguration: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]

container_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#container_monitoring_configuration NetworkfirewallContainerAssociation#container_monitoring_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#region NetworkfirewallContainerAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkfirewallContainerAssociationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#timeouts NetworkfirewallContainerAssociation#timeouts}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfiguration <a name="NetworkfirewallContainerAssociationContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

const networkfirewallContainerAssociationContainerMonitoringConfiguration: networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.clusterArn">clusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#cluster_arn NetworkfirewallContainerAssociation#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.attributeFilter">attributeFilter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]</code> | attribute_filter block. |

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#cluster_arn NetworkfirewallContainerAssociation#cluster_arn}.

---

##### `attributeFilter`<sup>Optional</sup> <a name="attributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.attributeFilter"></a>

```typescript
public readonly attributeFilter: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]

attribute_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#attribute_filter NetworkfirewallContainerAssociation#attribute_filter}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

const networkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter: networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}.

---

### NetworkfirewallContainerAssociationTimeouts <a name="NetworkfirewallContainerAssociationTimeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

const networkfirewallContainerAssociationTimeouts: networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#create NetworkfirewallContainerAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#delete NetworkfirewallContainerAssociation#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#update NetworkfirewallContainerAssociation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.get"></a>

```typescript
public get(index: number): NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationList" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.get"></a>

```typescript
public get(index: number): NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.putAttributeFilter">putAttributeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resetAttributeFilter">resetAttributeFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeFilter` <a name="putAttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.putAttributeFilter"></a>

```typescript
public putAttributeFilter(value: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.putAttributeFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]

---

##### `resetAttributeFilter` <a name="resetAttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resetAttributeFilter"></a>

```typescript
public resetAttributeFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilter">attributeFilter</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilterInput">attributeFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeFilter`<sup>Required</sup> <a name="attributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilter"></a>

```typescript
public readonly attributeFilter: NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList</a>

---

##### `attributeFilterInput`<sup>Optional</sup> <a name="attributeFilterInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilterInput"></a>

```typescript
public readonly attributeFilterInput: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>

---


### NetworkfirewallContainerAssociationTimeoutsOutputReference <a name="NetworkfirewallContainerAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-aws'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

---



