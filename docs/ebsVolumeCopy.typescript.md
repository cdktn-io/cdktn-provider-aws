# `ebsVolumeCopy` Submodule <a name="`ebsVolumeCopy` Submodule" id="@cdktn/provider-aws.ebsVolumeCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsVolumeCopy <a name="EbsVolumeCopy" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy aws_ebs_volume_copy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.Initializer"></a>

```typescript
import { ebsVolumeCopy } from '@cdktn/provider-aws'

new ebsVolumeCopy.EbsVolumeCopy(scope: Construct, id: string, config: EbsVolumeCopyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig">EbsVolumeCopyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig">EbsVolumeCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.putTimeouts"></a>

```typescript
public putTimeouts(value: EbsVolumeCopyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts">EbsVolumeCopyTimeouts</a>

---

##### `resetIops` <a name="resetIops" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSize` <a name="resetSize" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EbsVolumeCopy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.isConstruct"></a>

```typescript
import { ebsVolumeCopy } from '@cdktn/provider-aws'

ebsVolumeCopy.EbsVolumeCopy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.isTerraformElement"></a>

```typescript
import { ebsVolumeCopy } from '@cdktn/provider-aws'

ebsVolumeCopy.EbsVolumeCopy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.isTerraformResource"></a>

```typescript
import { ebsVolumeCopy } from '@cdktn/provider-aws'

ebsVolumeCopy.EbsVolumeCopy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.generateConfigForImport"></a>

```typescript
import { ebsVolumeCopy } from '@cdktn/provider-aws'

ebsVolumeCopy.EbsVolumeCopy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EbsVolumeCopy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EbsVolumeCopy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EbsVolumeCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EbsVolumeCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference">EbsVolumeCopyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.sourceVolumeIdInput">sourceVolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts">EbsVolumeCopyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.sourceVolumeId">sourceVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.timeouts"></a>

```typescript
public readonly timeouts: EbsVolumeCopyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference">EbsVolumeCopyTimeoutsOutputReference</a>

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `sourceVolumeIdInput`<sup>Optional</sup> <a name="sourceVolumeIdInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.sourceVolumeIdInput"></a>

```typescript
public readonly sourceVolumeIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EbsVolumeCopyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts">EbsVolumeCopyTimeouts</a>

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `sourceVolumeId`<sup>Required</sup> <a name="sourceVolumeId" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.sourceVolumeId"></a>

```typescript
public readonly sourceVolumeId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EbsVolumeCopyConfig <a name="EbsVolumeCopyConfig" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.Initializer"></a>

```typescript
import { ebsVolumeCopy } from '@cdktn/provider-aws'

const ebsVolumeCopyConfig: ebsVolumeCopy.EbsVolumeCopyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.sourceVolumeId">sourceVolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#source_volume_id EbsVolumeCopy#source_volume_id}. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#iops EbsVolumeCopy#iops}. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#size EbsVolumeCopy#size}. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#tags EbsVolumeCopy#tags}. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#throughput EbsVolumeCopy#throughput}. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts">EbsVolumeCopyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#volume_type EbsVolumeCopy#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `sourceVolumeId`<sup>Required</sup> <a name="sourceVolumeId" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.sourceVolumeId"></a>

```typescript
public readonly sourceVolumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#source_volume_id EbsVolumeCopy#source_volume_id}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#iops EbsVolumeCopy#iops}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#region EbsVolumeCopy#region}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#size EbsVolumeCopy#size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#tags EbsVolumeCopy#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#throughput EbsVolumeCopy#throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EbsVolumeCopyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts">EbsVolumeCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#timeouts EbsVolumeCopy#timeouts}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyConfig.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#volume_type EbsVolumeCopy#volume_type}.

---

### EbsVolumeCopyTimeouts <a name="EbsVolumeCopyTimeouts" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts.Initializer"></a>

```typescript
import { ebsVolumeCopy } from '@cdktn/provider-aws'

const ebsVolumeCopyTimeouts: ebsVolumeCopy.EbsVolumeCopyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#create EbsVolumeCopy#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#delete EbsVolumeCopy#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ebs_volume_copy#update EbsVolumeCopy#update}

---

## Classes <a name="Classes" id="Classes"></a>

### EbsVolumeCopyTimeoutsOutputReference <a name="EbsVolumeCopyTimeoutsOutputReference" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.Initializer"></a>

```typescript
import { ebsVolumeCopy } from '@cdktn/provider-aws'

new ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts">EbsVolumeCopyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EbsVolumeCopyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ebsVolumeCopy.EbsVolumeCopyTimeouts">EbsVolumeCopyTimeouts</a>

---



