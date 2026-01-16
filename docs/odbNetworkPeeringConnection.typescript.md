# `odbNetworkPeeringConnection` Submodule <a name="`odbNetworkPeeringConnection` Submodule" id="@cdktn/provider-aws.odbNetworkPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbNetworkPeeringConnection <a name="OdbNetworkPeeringConnection" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection aws_odb_network_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer"></a>

```typescript
import { odbNetworkPeeringConnection } from '@cdktn/provider-aws'

new odbNetworkPeeringConnection.OdbNetworkPeeringConnection(scope: Construct, id: string, config: OdbNetworkPeeringConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig">OdbNetworkPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig">OdbNetworkPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOdbNetworkArn">resetOdbNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOdbNetworkId">resetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: OdbNetworkPeeringConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

---

##### `resetOdbNetworkArn` <a name="resetOdbNetworkArn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOdbNetworkArn"></a>

```typescript
public resetOdbNetworkArn(): void
```

##### `resetOdbNetworkId` <a name="resetOdbNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOdbNetworkId"></a>

```typescript
public resetOdbNetworkId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OdbNetworkPeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isConstruct"></a>

```typescript
import { odbNetworkPeeringConnection } from '@cdktn/provider-aws'

odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformElement"></a>

```typescript
import { odbNetworkPeeringConnection } from '@cdktn/provider-aws'

odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformResource"></a>

```typescript
import { odbNetworkPeeringConnection } from '@cdktn/provider-aws'

odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport"></a>

```typescript
import { odbNetworkPeeringConnection } from '@cdktn/provider-aws'

odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OdbNetworkPeeringConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbNetworkPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbNetworkPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OdbNetworkPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbPeeringConnectionType">odbPeeringConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkArn">peerNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.percentProgress">percentProgress</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference">OdbNetworkPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkArnInput">odbNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkIdInput">peerNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkArn">odbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkId">peerNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `odbPeeringConnectionType`<sup>Required</sup> <a name="odbPeeringConnectionType" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbPeeringConnectionType"></a>

```typescript
public readonly odbPeeringConnectionType: string;
```

- *Type:* string

---

##### `peerNetworkArn`<sup>Required</sup> <a name="peerNetworkArn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkArn"></a>

```typescript
public readonly peerNetworkArn: string;
```

- *Type:* string

---

##### `percentProgress`<sup>Required</sup> <a name="percentProgress" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.percentProgress"></a>

```typescript
public readonly percentProgress: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeouts"></a>

```typescript
public readonly timeouts: OdbNetworkPeeringConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference">OdbNetworkPeeringConnectionTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `odbNetworkArnInput`<sup>Optional</sup> <a name="odbNetworkArnInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkArnInput"></a>

```typescript
public readonly odbNetworkArnInput: string;
```

- *Type:* string

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkIdInput"></a>

```typescript
public readonly odbNetworkIdInput: string;
```

- *Type:* string

---

##### `peerNetworkIdInput`<sup>Optional</sup> <a name="peerNetworkIdInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkIdInput"></a>

```typescript
public readonly peerNetworkIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OdbNetworkPeeringConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `odbNetworkArn`<sup>Required</sup> <a name="odbNetworkArn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkArn"></a>

```typescript
public readonly odbNetworkArn: string;
```

- *Type:* string

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

---

##### `peerNetworkId`<sup>Required</sup> <a name="peerNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkId"></a>

```typescript
public readonly peerNetworkId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbNetworkPeeringConnectionConfig <a name="OdbNetworkPeeringConnectionConfig" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.Initializer"></a>

```typescript
import { odbNetworkPeeringConnection } from '@cdktn/provider-aws'

const odbNetworkPeeringConnectionConfig: odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the odb network peering connection. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.peerNetworkId">peerNetworkId</a></code> | <code>string</code> | Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.odbNetworkArn">odbNetworkArn</a></code> | <code>string</code> | ARN of the odb network peering connection. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | Required field. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the odb network peering connection. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#display_name OdbNetworkPeeringConnection#display_name}

---

##### `peerNetworkId`<sup>Required</sup> <a name="peerNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.peerNetworkId"></a>

```typescript
public readonly peerNetworkId: string;
```

- *Type:* string

Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#peer_network_id OdbNetworkPeeringConnection#peer_network_id}

---

##### `odbNetworkArn`<sup>Optional</sup> <a name="odbNetworkArn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.odbNetworkArn"></a>

```typescript
public readonly odbNetworkArn: string;
```

- *Type:* string

ARN of the odb network peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#odb_network_arn OdbNetworkPeeringConnection#odb_network_arn}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

Required field.

The unique identifier of the ODB network that initiates the peering connection. A sample ID is odbpcx-abcdefgh12345678. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#odb_network_id OdbNetworkPeeringConnection#odb_network_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#region OdbNetworkPeeringConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OdbNetworkPeeringConnectionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#timeouts OdbNetworkPeeringConnection#timeouts}

---

### OdbNetworkPeeringConnectionTimeouts <a name="OdbNetworkPeeringConnectionTimeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.Initializer"></a>

```typescript
import { odbNetworkPeeringConnection } from '@cdktn/provider-aws'

const odbNetworkPeeringConnectionTimeouts: odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#create OdbNetworkPeeringConnection#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#delete OdbNetworkPeeringConnection#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_network_peering_connection#update OdbNetworkPeeringConnection#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbNetworkPeeringConnectionTimeoutsOutputReference <a name="OdbNetworkPeeringConnectionTimeoutsOutputReference" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { odbNetworkPeeringConnection } from '@cdktn/provider-aws'

new odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbNetworkPeeringConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

---



