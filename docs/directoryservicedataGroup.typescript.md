# `directoryservicedataGroup` Submodule <a name="`directoryservicedataGroup` Submodule" id="@cdktn/provider-aws.directoryservicedataGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryservicedataGroup <a name="DirectoryservicedataGroup" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group aws_directoryservicedata_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer"></a>

```typescript
import { directoryservicedataGroup } from '@cdktn/provider-aws'

new directoryservicedataGroup.DirectoryservicedataGroup(scope: Construct, id: string, config: DirectoryservicedataGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig">DirectoryservicedataGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig">DirectoryservicedataGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetGroupScope">resetGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetGroupType">resetGroupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetGroupScope` <a name="resetGroupScope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetGroupScope"></a>

```typescript
public resetGroupScope(): void
```

##### `resetGroupType` <a name="resetGroupType" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetGroupType"></a>

```typescript
public resetGroupType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryservicedataGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isConstruct"></a>

```typescript
import { directoryservicedataGroup } from '@cdktn/provider-aws'

directoryservicedataGroup.DirectoryservicedataGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformElement"></a>

```typescript
import { directoryservicedataGroup } from '@cdktn/provider-aws'

directoryservicedataGroup.DirectoryservicedataGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformResource"></a>

```typescript
import { directoryservicedataGroup } from '@cdktn/provider-aws'

directoryservicedataGroup.DirectoryservicedataGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport"></a>

```typescript
import { directoryservicedataGroup } from '@cdktn/provider-aws'

directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectoryservicedataGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryservicedataGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryservicedataGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryservicedataGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.distinguishedName">distinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupScopeInput">groupScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupTypeInput">groupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.samAccountNameInput">samAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupScope">groupScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupType">groupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.samAccountName">samAccountName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `distinguishedName`<sup>Required</sup> <a name="distinguishedName" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.distinguishedName"></a>

```typescript
public readonly distinguishedName: string;
```

- *Type:* string

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `groupScopeInput`<sup>Optional</sup> <a name="groupScopeInput" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupScopeInput"></a>

```typescript
public readonly groupScopeInput: string;
```

- *Type:* string

---

##### `groupTypeInput`<sup>Optional</sup> <a name="groupTypeInput" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupTypeInput"></a>

```typescript
public readonly groupTypeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `samAccountNameInput`<sup>Optional</sup> <a name="samAccountNameInput" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.samAccountNameInput"></a>

```typescript
public readonly samAccountNameInput: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `groupScope`<sup>Required</sup> <a name="groupScope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupScope"></a>

```typescript
public readonly groupScope: string;
```

- *Type:* string

---

##### `groupType`<sup>Required</sup> <a name="groupType" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupType"></a>

```typescript
public readonly groupType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.samAccountName"></a>

```typescript
public readonly samAccountName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryservicedataGroupConfig <a name="DirectoryservicedataGroupConfig" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.Initializer"></a>

```typescript
import { directoryservicedataGroup } from '@cdktn/provider-aws'

const directoryservicedataGroupConfig: directoryservicedataGroup.DirectoryservicedataGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group#directory_id DirectoryservicedataGroup#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.samAccountName">samAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group#sam_account_name DirectoryservicedataGroup#sam_account_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.groupScope">groupScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group#group_scope DirectoryservicedataGroup#group_scope}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.groupType">groupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group#group_type DirectoryservicedataGroup#group_type}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group#directory_id DirectoryservicedataGroup#directory_id}.

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.samAccountName"></a>

```typescript
public readonly samAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group#sam_account_name DirectoryservicedataGroup#sam_account_name}.

---

##### `groupScope`<sup>Optional</sup> <a name="groupScope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.groupScope"></a>

```typescript
public readonly groupScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group#group_scope DirectoryservicedataGroup#group_scope}.

---

##### `groupType`<sup>Optional</sup> <a name="groupType" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.groupType"></a>

```typescript
public readonly groupType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group#group_type DirectoryservicedataGroup#group_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_group#region DirectoryservicedataGroup#region}

---



