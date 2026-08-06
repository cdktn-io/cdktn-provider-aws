# `sagemakerHubContentReference` Submodule <a name="`sagemakerHubContentReference` Submodule" id="@cdktn/provider-aws.sagemakerHubContentReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerHubContentReference <a name="SagemakerHubContentReference" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference aws_sagemaker_hub_content_reference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer"></a>

```typescript
import { sagemakerHubContentReference } from '@cdktn/provider-aws'

new sagemakerHubContentReference.SagemakerHubContentReference(scope: Construct, id: string, config: SagemakerHubContentReferenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig">SagemakerHubContentReferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig">SagemakerHubContentReferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetMinVersion">resetMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts"></a>

```typescript
public putTimeouts(value: SagemakerHubContentReferenceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a>

---

##### `resetMinVersion` <a name="resetMinVersion" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetMinVersion"></a>

```typescript
public resetMinVersion(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerHubContentReference resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isConstruct"></a>

```typescript
import { sagemakerHubContentReference } from '@cdktn/provider-aws'

sagemakerHubContentReference.SagemakerHubContentReference.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformElement"></a>

```typescript
import { sagemakerHubContentReference } from '@cdktn/provider-aws'

sagemakerHubContentReference.SagemakerHubContentReference.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformResource"></a>

```typescript
import { sagemakerHubContentReference } from '@cdktn/provider-aws'

sagemakerHubContentReference.SagemakerHubContentReference.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport"></a>

```typescript
import { sagemakerHubContentReference } from '@cdktn/provider-aws'

sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerHubContentReference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerHubContentReference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerHubContentReference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerHubContentReference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubArn">hubArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentArn">hubContentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentStatus">hubContentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentVersion">hubContentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference">SagemakerHubContentReferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentNameInput">hubContentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubNameInput">hubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersionInput">minVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArnInput">sagemakerPublicHubContentArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentName">hubContentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubName">hubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersion">minVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArn">sagemakerPublicHubContentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hubArn`<sup>Required</sup> <a name="hubArn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubArn"></a>

```typescript
public readonly hubArn: string;
```

- *Type:* string

---

##### `hubContentArn`<sup>Required</sup> <a name="hubContentArn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentArn"></a>

```typescript
public readonly hubContentArn: string;
```

- *Type:* string

---

##### `hubContentStatus`<sup>Required</sup> <a name="hubContentStatus" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentStatus"></a>

```typescript
public readonly hubContentStatus: string;
```

- *Type:* string

---

##### `hubContentVersion`<sup>Required</sup> <a name="hubContentVersion" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentVersion"></a>

```typescript
public readonly hubContentVersion: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeouts"></a>

```typescript
public readonly timeouts: SagemakerHubContentReferenceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference">SagemakerHubContentReferenceTimeoutsOutputReference</a>

---

##### `hubContentNameInput`<sup>Optional</sup> <a name="hubContentNameInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentNameInput"></a>

```typescript
public readonly hubContentNameInput: string;
```

- *Type:* string

---

##### `hubNameInput`<sup>Optional</sup> <a name="hubNameInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubNameInput"></a>

```typescript
public readonly hubNameInput: string;
```

- *Type:* string

---

##### `minVersionInput`<sup>Optional</sup> <a name="minVersionInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersionInput"></a>

```typescript
public readonly minVersionInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sagemakerPublicHubContentArnInput`<sup>Optional</sup> <a name="sagemakerPublicHubContentArnInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArnInput"></a>

```typescript
public readonly sagemakerPublicHubContentArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SagemakerHubContentReferenceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a>

---

##### `hubContentName`<sup>Required</sup> <a name="hubContentName" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentName"></a>

```typescript
public readonly hubContentName: string;
```

- *Type:* string

---

##### `hubName`<sup>Required</sup> <a name="hubName" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubName"></a>

```typescript
public readonly hubName: string;
```

- *Type:* string

---

##### `minVersion`<sup>Required</sup> <a name="minVersion" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersion"></a>

```typescript
public readonly minVersion: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sagemakerPublicHubContentArn`<sup>Required</sup> <a name="sagemakerPublicHubContentArn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArn"></a>

```typescript
public readonly sagemakerPublicHubContentArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerHubContentReferenceConfig <a name="SagemakerHubContentReferenceConfig" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.Initializer"></a>

```typescript
import { sagemakerHubContentReference } from '@cdktn/provider-aws'

const sagemakerHubContentReferenceConfig: sagemakerHubContentReference.SagemakerHubContentReferenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubContentName">hubContentName</a></code> | <code>string</code> | Name of the hub content reference. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubName">hubName</a></code> | <code>string</code> | Name of the private SageMaker Hub to add the content reference to. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.sagemakerPublicHubContentArn">sagemakerPublicHubContentArn</a></code> | <code>string</code> | ARN of the public SageMaker JumpStart hub content to reference. The ARN must not include a version suffix. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.minVersion">minVersion</a></code> | <code>string</code> | Minimum version of the hub content to reference. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#tags SagemakerHubContentReference#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hubContentName`<sup>Required</sup> <a name="hubContentName" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubContentName"></a>

```typescript
public readonly hubContentName: string;
```

- *Type:* string

Name of the hub content reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#hub_content_name SagemakerHubContentReference#hub_content_name}

---

##### `hubName`<sup>Required</sup> <a name="hubName" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubName"></a>

```typescript
public readonly hubName: string;
```

- *Type:* string

Name of the private SageMaker Hub to add the content reference to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#hub_name SagemakerHubContentReference#hub_name}

---

##### `sagemakerPublicHubContentArn`<sup>Required</sup> <a name="sagemakerPublicHubContentArn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.sagemakerPublicHubContentArn"></a>

```typescript
public readonly sagemakerPublicHubContentArn: string;
```

- *Type:* string

ARN of the public SageMaker JumpStart hub content to reference. The ARN must not include a version suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#sagemaker_public_hub_content_arn SagemakerHubContentReference#sagemaker_public_hub_content_arn}

---

##### `minVersion`<sup>Optional</sup> <a name="minVersion" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.minVersion"></a>

```typescript
public readonly minVersion: string;
```

- *Type:* string

Minimum version of the hub content to reference.

Use "1.0.0" to support all versions. Changing this value to an empty string forces replacement of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#min_version SagemakerHubContentReference#min_version}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#region SagemakerHubContentReference#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#tags SagemakerHubContentReference#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SagemakerHubContentReferenceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#timeouts SagemakerHubContentReference#timeouts}

---

### SagemakerHubContentReferenceTimeouts <a name="SagemakerHubContentReferenceTimeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.Initializer"></a>

```typescript
import { sagemakerHubContentReference } from '@cdktn/provider-aws'

const sagemakerHubContentReferenceTimeouts: sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#create SagemakerHubContentReference#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#delete SagemakerHubContentReference#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_hub_content_reference#update SagemakerHubContentReference#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerHubContentReferenceTimeoutsOutputReference <a name="SagemakerHubContentReferenceTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer"></a>

```typescript
import { sagemakerHubContentReference } from '@cdktn/provider-aws'

new sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerHubContentReferenceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a>

---



