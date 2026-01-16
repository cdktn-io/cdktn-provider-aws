# `globalacceleratorListener` Submodule <a name="`globalacceleratorListener` Submodule" id="@cdktn/provider-aws.globalacceleratorListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorListener <a name="GlobalacceleratorListener" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener aws_globalaccelerator_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

new globalacceleratorListener.GlobalacceleratorListener(scope: Construct, id: string, config: GlobalacceleratorListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig">GlobalacceleratorListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig">GlobalacceleratorListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putPortRange">putPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetClientAffinity">resetClientAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPortRange` <a name="putPortRange" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putPortRange"></a>

```typescript
public putPortRange(value: IResolvable | GlobalacceleratorListenerPortRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putPortRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putTimeouts"></a>

```typescript
public putTimeouts(value: GlobalacceleratorListenerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a>

---

##### `resetClientAffinity` <a name="resetClientAffinity" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetClientAffinity"></a>

```typescript
public resetClientAffinity(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalacceleratorListener resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isConstruct"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

globalacceleratorListener.GlobalacceleratorListener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

globalacceleratorListener.GlobalacceleratorListener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

globalacceleratorListener.GlobalacceleratorListener.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GlobalacceleratorListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.portRange">portRange</a></code> | <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList">GlobalacceleratorListenerPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference">GlobalacceleratorListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArnInput">acceleratorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinityInput">clientAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.portRangeInput">portRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArn">acceleratorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinity">clientAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.portRange"></a>

```typescript
public readonly portRange: GlobalacceleratorListenerPortRangeList;
```

- *Type:* <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList">GlobalacceleratorListenerPortRangeList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.timeouts"></a>

```typescript
public readonly timeouts: GlobalacceleratorListenerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference">GlobalacceleratorListenerTimeoutsOutputReference</a>

---

##### `acceleratorArnInput`<sup>Optional</sup> <a name="acceleratorArnInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArnInput"></a>

```typescript
public readonly acceleratorArnInput: string;
```

- *Type:* string

---

##### `clientAffinityInput`<sup>Optional</sup> <a name="clientAffinityInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinityInput"></a>

```typescript
public readonly clientAffinityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: IResolvable | GlobalacceleratorListenerPortRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GlobalacceleratorListenerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a>

---

##### `acceleratorArn`<sup>Required</sup> <a name="acceleratorArn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArn"></a>

```typescript
public readonly acceleratorArn: string;
```

- *Type:* string

---

##### `clientAffinity`<sup>Required</sup> <a name="clientAffinity" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinity"></a>

```typescript
public readonly clientAffinity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorListenerConfig <a name="GlobalacceleratorListenerConfig" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

const globalacceleratorListenerConfig: globalacceleratorListener.GlobalacceleratorListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.acceleratorArn">acceleratorArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#accelerator_arn GlobalacceleratorListener#accelerator_arn}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.portRange">portRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>[]</code> | port_range block. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#protocol GlobalacceleratorListener#protocol}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.clientAffinity">clientAffinity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#client_affinity GlobalacceleratorListener#client_affinity}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#id GlobalacceleratorListener#id}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acceleratorArn`<sup>Required</sup> <a name="acceleratorArn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.acceleratorArn"></a>

```typescript
public readonly acceleratorArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#accelerator_arn GlobalacceleratorListener#accelerator_arn}.

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.portRange"></a>

```typescript
public readonly portRange: IResolvable | GlobalacceleratorListenerPortRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>[]

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#port_range GlobalacceleratorListener#port_range}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#protocol GlobalacceleratorListener#protocol}.

---

##### `clientAffinity`<sup>Optional</sup> <a name="clientAffinity" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.clientAffinity"></a>

```typescript
public readonly clientAffinity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#client_affinity GlobalacceleratorListener#client_affinity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#id GlobalacceleratorListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GlobalacceleratorListenerTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#timeouts GlobalacceleratorListener#timeouts}

---

### GlobalacceleratorListenerPortRange <a name="GlobalacceleratorListenerPortRange" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

const globalacceleratorListenerPortRange: globalacceleratorListener.GlobalacceleratorListenerPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#from_port GlobalacceleratorListener#from_port}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#to_port GlobalacceleratorListener#to_port}. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#from_port GlobalacceleratorListener#from_port}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#to_port GlobalacceleratorListener#to_port}.

---

### GlobalacceleratorListenerTimeouts <a name="GlobalacceleratorListenerTimeouts" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

const globalacceleratorListenerTimeouts: globalacceleratorListener.GlobalacceleratorListenerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#create GlobalacceleratorListener#create}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#delete GlobalacceleratorListener#delete}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#update GlobalacceleratorListener#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#create GlobalacceleratorListener#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#delete GlobalacceleratorListener#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_listener#update GlobalacceleratorListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorListenerPortRangeList <a name="GlobalacceleratorListenerPortRangeList" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

new globalacceleratorListener.GlobalacceleratorListenerPortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.get"></a>

```typescript
public get(index: number): GlobalacceleratorListenerPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorListenerPortRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>[]

---


### GlobalacceleratorListenerPortRangeOutputReference <a name="GlobalacceleratorListenerPortRangeOutputReference" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

new globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorListenerPortRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>

---


### GlobalacceleratorListenerTimeoutsOutputReference <a name="GlobalacceleratorListenerTimeoutsOutputReference" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-aws'

new globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorListenerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a>

---



