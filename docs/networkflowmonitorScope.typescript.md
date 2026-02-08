# `networkflowmonitorScope` Submodule <a name="`networkflowmonitorScope` Submodule" id="@cdktn/provider-aws.networkflowmonitorScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorScope <a name="NetworkflowmonitorScope" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope aws_networkflowmonitor_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

new networkflowmonitorScope.NetworkflowmonitorScope(scope: Construct, id: string, config?: NetworkflowmonitorScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig">NetworkflowmonitorScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig">NetworkflowmonitorScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTarget"></a>

```typescript
public putTarget(value: IResolvable | NetworkflowmonitorScopeTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkflowmonitorScopeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkflowmonitorScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

networkflowmonitorScope.NetworkflowmonitorScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkflowmonitorScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkflowmonitorScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkflowmonitorScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeArn">scopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.target">target</a></code> | <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList">NetworkflowmonitorScopeTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference">NetworkflowmonitorScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.targetInput">targetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scopeArn`<sup>Required</sup> <a name="scopeArn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeArn"></a>

```typescript
public readonly scopeArn: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.target"></a>

```typescript
public readonly target: NetworkflowmonitorScopeTargetList;
```

- *Type:* <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList">NetworkflowmonitorScopeTargetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkflowmonitorScopeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference">NetworkflowmonitorScopeTimeoutsOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | NetworkflowmonitorScopeTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkflowmonitorScopeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorScopeConfig <a name="NetworkflowmonitorScopeConfig" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

const networkflowmonitorScopeConfig: networkflowmonitorScope.NetworkflowmonitorScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#tags NetworkflowmonitorScope#tags}. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.target">target</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]</code> | target block. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#tags NetworkflowmonitorScope#tags}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.target"></a>

```typescript
public readonly target: IResolvable | NetworkflowmonitorScopeTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#target NetworkflowmonitorScope#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkflowmonitorScopeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#timeouts NetworkflowmonitorScope#timeouts}

---

### NetworkflowmonitorScopeTarget <a name="NetworkflowmonitorScopeTarget" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

const networkflowmonitorScopeTarget: networkflowmonitorScope.NetworkflowmonitorScopeTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.targetIdentifier">targetIdentifier</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]</code> | target_identifier block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}.

---

##### `targetIdentifier`<sup>Optional</sup> <a name="targetIdentifier" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.targetIdentifier"></a>

```typescript
public readonly targetIdentifier: IResolvable | NetworkflowmonitorScopeTargetTargetIdentifier[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]

target_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#target_identifier NetworkflowmonitorScope#target_identifier}

---

### NetworkflowmonitorScopeTargetTargetIdentifier <a name="NetworkflowmonitorScopeTargetTargetIdentifier" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

const networkflowmonitorScopeTargetTargetIdentifier: networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetType">targetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#target_type NetworkflowmonitorScope#target_type}. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetId">targetId</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]</code> | target_id block. |

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#target_type NetworkflowmonitorScope#target_type}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetId"></a>

```typescript
public readonly targetId: IResolvable | NetworkflowmonitorScopeTargetTargetIdentifierTargetId[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]

target_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#target_id NetworkflowmonitorScope#target_id}

---

### NetworkflowmonitorScopeTargetTargetIdentifierTargetId <a name="NetworkflowmonitorScopeTargetTargetIdentifierTargetId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

const networkflowmonitorScopeTargetTargetIdentifierTargetId: networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#account_id NetworkflowmonitorScope#account_id}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#account_id NetworkflowmonitorScope#account_id}.

---

### NetworkflowmonitorScopeTimeouts <a name="NetworkflowmonitorScopeTimeouts" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

const networkflowmonitorScopeTimeouts: networkflowmonitorScope.NetworkflowmonitorScopeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#create NetworkflowmonitorScope#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#delete NetworkflowmonitorScope#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/networkflowmonitor_scope#update NetworkflowmonitorScope#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorScopeTargetList <a name="NetworkflowmonitorScopeTargetList" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

new networkflowmonitorScope.NetworkflowmonitorScopeTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.get"></a>

```typescript
public get(index: number): NetworkflowmonitorScopeTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorScopeTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]

---


### NetworkflowmonitorScopeTargetOutputReference <a name="NetworkflowmonitorScopeTargetOutputReference" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

new networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.putTargetIdentifier">putTargetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resetTargetIdentifier">resetTargetIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetIdentifier` <a name="putTargetIdentifier" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.putTargetIdentifier"></a>

```typescript
public putTargetIdentifier(value: IResolvable | NetworkflowmonitorScopeTargetTargetIdentifier[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.putTargetIdentifier.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]

---

##### `resetTargetIdentifier` <a name="resetTargetIdentifier" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resetTargetIdentifier"></a>

```typescript
public resetTargetIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifier">targetIdentifier</a></code> | <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList">NetworkflowmonitorScopeTargetTargetIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifierInput">targetIdentifierInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetIdentifier`<sup>Required</sup> <a name="targetIdentifier" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifier"></a>

```typescript
public readonly targetIdentifier: NetworkflowmonitorScopeTargetTargetIdentifierList;
```

- *Type:* <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList">NetworkflowmonitorScopeTargetTargetIdentifierList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `targetIdentifierInput`<sup>Optional</sup> <a name="targetIdentifierInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifierInput"></a>

```typescript
public readonly targetIdentifierInput: IResolvable | NetworkflowmonitorScopeTargetTargetIdentifier[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorScopeTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>

---


### NetworkflowmonitorScopeTargetTargetIdentifierList <a name="NetworkflowmonitorScopeTargetTargetIdentifierList" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

new networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.get"></a>

```typescript
public get(index: number): NetworkflowmonitorScopeTargetTargetIdentifierOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorScopeTargetTargetIdentifier[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]

---


### NetworkflowmonitorScopeTargetTargetIdentifierOutputReference <a name="NetworkflowmonitorScopeTargetTargetIdentifierOutputReference" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

new networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.putTargetId">putTargetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetId` <a name="putTargetId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.putTargetId"></a>

```typescript
public putTargetId(value: IResolvable | NetworkflowmonitorScopeTargetTargetIdentifierTargetId[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.putTargetId.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]

---

##### `resetTargetId` <a name="resetTargetId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resetTargetId"></a>

```typescript
public resetTargetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetId">targetId</a></code> | <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList">NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetIdInput">targetIdInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetTypeInput">targetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetId"></a>

```typescript
public readonly targetId: NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList;
```

- *Type:* <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList">NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList</a>

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: IResolvable | NetworkflowmonitorScopeTargetTargetIdentifierTargetId[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetTypeInput"></a>

```typescript
public readonly targetTypeInput: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorScopeTargetTargetIdentifier;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>

---


### NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList <a name="NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

new networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.get"></a>

```typescript
public get(index: number): NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorScopeTargetTargetIdentifierTargetId[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]

---


### NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference <a name="NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

new networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorScopeTargetTargetIdentifierTargetId;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>

---


### NetworkflowmonitorScopeTimeoutsOutputReference <a name="NetworkflowmonitorScopeTimeoutsOutputReference" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkflowmonitorScope } from '@cdktn/provider-aws'

new networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkflowmonitorScopeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a>

---



