# `networkflowmonitorMonitor` Submodule <a name="`networkflowmonitorMonitor` Submodule" id="@cdktf/provider-aws.networkflowmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorMonitor <a name="NetworkflowmonitorMonitor" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor aws_networkflowmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

new networkflowmonitorMonitor.NetworkflowmonitorMonitor(scope: Construct, id: string, config: NetworkflowmonitorMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig">NetworkflowmonitorMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig">NetworkflowmonitorMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResource">putLocalResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResource">putRemoteResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetLocalResource">resetLocalResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRemoteResource">resetRemoteResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocalResource` <a name="putLocalResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResource"></a>

```typescript
public putLocalResource(value: IResolvable | NetworkflowmonitorMonitorLocalResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]

---

##### `putRemoteResource` <a name="putRemoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResource"></a>

```typescript
public putRemoteResource(value: IResolvable | NetworkflowmonitorMonitorRemoteResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkflowmonitorMonitorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

---

##### `resetLocalResource` <a name="resetLocalResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetLocalResource"></a>

```typescript
public resetLocalResource(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRemoteResource` <a name="resetRemoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRemoteResource"></a>

```typescript
public resetRemoteResource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkflowmonitorMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkflowmonitorMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkflowmonitorMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkflowmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResource">localResource</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList">NetworkflowmonitorMonitorLocalResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorArn">monitorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResource">remoteResource</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList">NetworkflowmonitorMonitorRemoteResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference">NetworkflowmonitorMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResourceInput">localResourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorNameInput">monitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResourceInput">remoteResourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArnInput">scopeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorName">monitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArn">scopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `localResource`<sup>Required</sup> <a name="localResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResource"></a>

```typescript
public readonly localResource: NetworkflowmonitorMonitorLocalResourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList">NetworkflowmonitorMonitorLocalResourceList</a>

---

##### `monitorArn`<sup>Required</sup> <a name="monitorArn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorArn"></a>

```typescript
public readonly monitorArn: string;
```

- *Type:* string

---

##### `remoteResource`<sup>Required</sup> <a name="remoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResource"></a>

```typescript
public readonly remoteResource: NetworkflowmonitorMonitorRemoteResourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList">NetworkflowmonitorMonitorRemoteResourceList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkflowmonitorMonitorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference">NetworkflowmonitorMonitorTimeoutsOutputReference</a>

---

##### `localResourceInput`<sup>Optional</sup> <a name="localResourceInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResourceInput"></a>

```typescript
public readonly localResourceInput: IResolvable | NetworkflowmonitorMonitorLocalResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]

---

##### `monitorNameInput`<sup>Optional</sup> <a name="monitorNameInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorNameInput"></a>

```typescript
public readonly monitorNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `remoteResourceInput`<sup>Optional</sup> <a name="remoteResourceInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResourceInput"></a>

```typescript
public readonly remoteResourceInput: IResolvable | NetworkflowmonitorMonitorRemoteResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]

---

##### `scopeArnInput`<sup>Optional</sup> <a name="scopeArnInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArnInput"></a>

```typescript
public readonly scopeArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkflowmonitorMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `scopeArn`<sup>Required</sup> <a name="scopeArn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArn"></a>

```typescript
public readonly scopeArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorMonitorConfig <a name="NetworkflowmonitorMonitorConfig" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.Initializer"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

const networkflowmonitorMonitorConfig: networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.monitorName">monitorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.scopeArn">scopeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.localResource">localResource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]</code> | local_resource block. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.remoteResource">remoteResource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]</code> | remote_resource block. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}.

---

##### `scopeArn`<sup>Required</sup> <a name="scopeArn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.scopeArn"></a>

```typescript
public readonly scopeArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}.

---

##### `localResource`<sup>Optional</sup> <a name="localResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.localResource"></a>

```typescript
public readonly localResource: IResolvable | NetworkflowmonitorMonitorLocalResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]

local_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#local_resource NetworkflowmonitorMonitor#local_resource}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#region NetworkflowmonitorMonitor#region}

---

##### `remoteResource`<sup>Optional</sup> <a name="remoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.remoteResource"></a>

```typescript
public readonly remoteResource: IResolvable | NetworkflowmonitorMonitorRemoteResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]

remote_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#remote_resource NetworkflowmonitorMonitor#remote_resource}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkflowmonitorMonitorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#timeouts NetworkflowmonitorMonitor#timeouts}

---

### NetworkflowmonitorMonitorLocalResource <a name="NetworkflowmonitorMonitorLocalResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.Initializer"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

const networkflowmonitorMonitorLocalResource: networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}.

---

### NetworkflowmonitorMonitorRemoteResource <a name="NetworkflowmonitorMonitorRemoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.Initializer"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

const networkflowmonitorMonitorRemoteResource: networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}.

---

### NetworkflowmonitorMonitorTimeouts <a name="NetworkflowmonitorMonitorTimeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.Initializer"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

const networkflowmonitorMonitorTimeouts: networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#create NetworkflowmonitorMonitor#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#delete NetworkflowmonitorMonitor#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/networkflowmonitor_monitor#update NetworkflowmonitorMonitor#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorMonitorLocalResourceList <a name="NetworkflowmonitorMonitorLocalResourceList" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

new networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.get"></a>

```typescript
public get(index: number): NetworkflowmonitorMonitorLocalResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorMonitorLocalResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>[]

---


### NetworkflowmonitorMonitorLocalResourceOutputReference <a name="NetworkflowmonitorMonitorLocalResourceOutputReference" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

new networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorMonitorLocalResource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>

---


### NetworkflowmonitorMonitorRemoteResourceList <a name="NetworkflowmonitorMonitorRemoteResourceList" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

new networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.get"></a>

```typescript
public get(index: number): NetworkflowmonitorMonitorRemoteResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorMonitorRemoteResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>[]

---


### NetworkflowmonitorMonitorRemoteResourceOutputReference <a name="NetworkflowmonitorMonitorRemoteResourceOutputReference" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

new networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorMonitorRemoteResource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>

---


### NetworkflowmonitorMonitorTimeoutsOutputReference <a name="NetworkflowmonitorMonitorTimeoutsOutputReference" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkflowmonitorMonitor } from '@cdktf/provider-aws'

new networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

---



