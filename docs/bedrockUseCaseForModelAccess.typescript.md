# `bedrockUseCaseForModelAccess` Submodule <a name="`bedrockUseCaseForModelAccess` Submodule" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockUseCaseForModelAccess <a name="BedrockUseCaseForModelAccess" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrock_use_case_for_model_access aws_bedrock_use_case_for_model_access}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer"></a>

```typescript
import { bedrockUseCaseForModelAccess } from '@cdktn/provider-aws'

new bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess(scope: Construct, id: string, config: BedrockUseCaseForModelAccessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig">BedrockUseCaseForModelAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig">BedrockUseCaseForModelAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockUseCaseForModelAccess resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isConstruct"></a>

```typescript
import { bedrockUseCaseForModelAccess } from '@cdktn/provider-aws'

bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformElement"></a>

```typescript
import { bedrockUseCaseForModelAccess } from '@cdktn/provider-aws'

bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformResource"></a>

```typescript
import { bedrockUseCaseForModelAccess } from '@cdktn/provider-aws'

bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport"></a>

```typescript
import { bedrockUseCaseForModelAccess } from '@cdktn/provider-aws'

bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockUseCaseForModelAccess resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockUseCaseForModelAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockUseCaseForModelAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrock_use_case_for_model_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockUseCaseForModelAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.formDataInput">formDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.formData">formData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `formDataInput`<sup>Optional</sup> <a name="formDataInput" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.formDataInput"></a>

```typescript
public readonly formDataInput: string;
```

- *Type:* string

---

##### `formData`<sup>Required</sup> <a name="formData" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.formData"></a>

```typescript
public readonly formData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockUseCaseForModelAccessConfig <a name="BedrockUseCaseForModelAccessConfig" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.Initializer"></a>

```typescript
import { bedrockUseCaseForModelAccess } from '@cdktn/provider-aws'

const bedrockUseCaseForModelAccessConfig: bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.formData">formData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrock_use_case_for_model_access#form_data BedrockUseCaseForModelAccess#form_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `formData`<sup>Required</sup> <a name="formData" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.formData"></a>

```typescript
public readonly formData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrock_use_case_for_model_access#form_data BedrockUseCaseForModelAccess#form_data}.

---



