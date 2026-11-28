# `devopsagentAssetFile` Submodule <a name="`devopsagentAssetFile` Submodule" id="@cdktn/provider-aws.devopsagentAssetFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAssetFile <a name="DevopsagentAssetFile" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file aws_devopsagent_asset_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer"></a>

```typescript
import { devopsagentAssetFile } from '@cdktn/provider-aws'

new devopsagentAssetFile.DevopsagentAssetFile(scope: Construct, id: string, config: DevopsagentAssetFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig">DevopsagentAssetFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig">DevopsagentAssetFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.putContent"></a>

```typescript
public putContent(value: IResolvable | DevopsagentAssetFileContent[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.putContent.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>[]

---

##### `resetContent` <a name="resetContent" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAssetFile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isConstruct"></a>

```typescript
import { devopsagentAssetFile } from '@cdktn/provider-aws'

devopsagentAssetFile.DevopsagentAssetFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformElement"></a>

```typescript
import { devopsagentAssetFile } from '@cdktn/provider-aws'

devopsagentAssetFile.DevopsagentAssetFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformResource"></a>

```typescript
import { devopsagentAssetFile } from '@cdktn/provider-aws'

devopsagentAssetFile.DevopsagentAssetFile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport"></a>

```typescript
import { devopsagentAssetFile } from '@cdktn/provider-aws'

devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DevopsagentAssetFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsagentAssetFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsagentAssetFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAssetFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.content">content</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList">DevopsagentAssetFileContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataActual">metadataActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceIdInput">agentSpaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetIdInput">assetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.contentInput">contentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetId">assetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.content"></a>

```typescript
public readonly content: DevopsagentAssetFileContentList;
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList">DevopsagentAssetFileContentList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `metadataActual`<sup>Required</sup> <a name="metadataActual" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataActual"></a>

```typescript
public readonly metadataActual: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `agentSpaceIdInput`<sup>Optional</sup> <a name="agentSpaceIdInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceIdInput"></a>

```typescript
public readonly agentSpaceIdInput: string;
```

- *Type:* string

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetIdInput"></a>

```typescript
public readonly assetIdInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.contentInput"></a>

```typescript
public readonly contentInput: IResolvable | DevopsagentAssetFileContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssetFileConfig <a name="DevopsagentAssetFileConfig" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.Initializer"></a>

```typescript
import { devopsagentAssetFile } from '@cdktn/provider-aws'

const devopsagentAssetFileConfig: devopsagentAssetFile.DevopsagentAssetFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | Identifier of the Agent Space containing the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.assetId">assetId</a></code> | <code>string</code> | Identifier of the asset containing the file. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.path">path</a></code> | <code>string</code> | Path of the file within the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.content">content</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>[]</code> | content block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.metadata">metadata</a></code> | <code>string</code> | JSON document describing the file. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

Identifier of the Agent Space containing the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#agent_space_id DevopsagentAssetFile#agent_space_id}

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

Identifier of the asset containing the file. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#asset_id DevopsagentAssetFile#asset_id}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the file within the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#path DevopsagentAssetFile#path}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.content"></a>

```typescript
public readonly content: IResolvable | DevopsagentAssetFileContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>[]

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#content DevopsagentAssetFile#content}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

JSON document describing the file.

Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#metadata DevopsagentAssetFile#metadata}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#region DevopsagentAssetFile#region}

---

### DevopsagentAssetFileContent <a name="DevopsagentAssetFileContent" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.Initializer"></a>

```typescript
import { devopsagentAssetFile } from '@cdktn/provider-aws'

const devopsagentAssetFileContent: devopsagentAssetFile.DevopsagentAssetFileContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.bytes">bytes</a></code> | <code>string</code> | Base64-encoded binary file content. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.text">text</a></code> | <code>string</code> | Text file content. |

---

##### `bytes`<sup>Optional</sup> <a name="bytes" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.bytes"></a>

```typescript
public readonly bytes: string;
```

- *Type:* string

Base64-encoded binary file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#bytes DevopsagentAssetFile#bytes}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#text DevopsagentAssetFile#text}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssetFileContentList <a name="DevopsagentAssetFileContentList" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer"></a>

```typescript
import { devopsagentAssetFile } from '@cdktn/provider-aws'

new devopsagentAssetFile.DevopsagentAssetFileContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.get"></a>

```typescript
public get(index: number): DevopsagentAssetFileContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssetFileContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>[]

---


### DevopsagentAssetFileContentOutputReference <a name="DevopsagentAssetFileContentOutputReference" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer"></a>

```typescript
import { devopsagentAssetFile } from '@cdktn/provider-aws'

new devopsagentAssetFile.DevopsagentAssetFileContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetBytes">resetBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBytes` <a name="resetBytes" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetBytes"></a>

```typescript
public resetBytes(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytesInput">bytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytes">bytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bytesInput`<sup>Optional</sup> <a name="bytesInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytesInput"></a>

```typescript
public readonly bytesInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytes"></a>

```typescript
public readonly bytes: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssetFileContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>

---



