# `resiliencehubv2InputSource` Submodule <a name="`resiliencehubv2InputSource` Submodule" id="@cdktn/provider-aws.resiliencehubv2InputSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2InputSource <a name="Resiliencehubv2InputSource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source aws_resiliencehubv2_input_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSource(scope: Construct, id: string, config: Resiliencehubv2InputSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig">Resiliencehubv2InputSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig">Resiliencehubv2InputSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.putResourceConfiguration">putResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetResourceConfiguration">resetResourceConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceConfiguration` <a name="putResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.putResourceConfiguration"></a>

```typescript
public putResourceConfiguration(value: IResolvable | Resiliencehubv2InputSourceResourceConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.putResourceConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>[]

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceConfiguration` <a name="resetResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetResourceConfiguration"></a>

```typescript
public resetResourceConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2InputSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isConstruct"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

resiliencehubv2InputSource.Resiliencehubv2InputSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformElement"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformResource"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Resiliencehubv2InputSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Resiliencehubv2InputSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Resiliencehubv2InputSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2InputSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.inputSourceId">inputSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfiguration">resourceConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList">Resiliencehubv2InputSourceResourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfigurationInput">resourceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArnInput">serviceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArn">serviceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `inputSourceId`<sup>Required</sup> <a name="inputSourceId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.inputSourceId"></a>

```typescript
public readonly inputSourceId: string;
```

- *Type:* string

---

##### `resourceConfiguration`<sup>Required</sup> <a name="resourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfiguration"></a>

```typescript
public readonly resourceConfiguration: Resiliencehubv2InputSourceResourceConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList">Resiliencehubv2InputSourceResourceConfigurationList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceConfigurationInput`<sup>Optional</sup> <a name="resourceConfigurationInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfigurationInput"></a>

```typescript
public readonly resourceConfigurationInput: IResolvable | Resiliencehubv2InputSourceResourceConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>[]

---

##### `serviceArnInput`<sup>Optional</sup> <a name="serviceArnInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArnInput"></a>

```typescript
public readonly serviceArnInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2InputSourceConfig <a name="Resiliencehubv2InputSourceConfig" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

const resiliencehubv2InputSourceConfig: resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.serviceArn">serviceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#service_arn Resiliencehubv2InputSource#service_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.resourceConfiguration">resourceConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>[]</code> | resource_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#service_arn Resiliencehubv2InputSource#service_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#region Resiliencehubv2InputSource#region}

---

##### `resourceConfiguration`<sup>Optional</sup> <a name="resourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.resourceConfiguration"></a>

```typescript
public readonly resourceConfiguration: IResolvable | Resiliencehubv2InputSourceResourceConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>[]

resource_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#resource_configuration Resiliencehubv2InputSource#resource_configuration}

---

### Resiliencehubv2InputSourceResourceConfiguration <a name="Resiliencehubv2InputSourceResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

const resiliencehubv2InputSourceResourceConfiguration: resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.cfnStackArn">cfnStackArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#cfn_stack_arn Resiliencehubv2InputSource#cfn_stack_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.designFileS3Url">designFileS3Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#design_file_s3_url Resiliencehubv2InputSource#design_file_s3_url}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.eks">eks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>[]</code> | eks block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.resourceTag">resourceTag</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>[]</code> | resource_tag block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.tfStateFileUrl">tfStateFileUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#tf_state_file_url Resiliencehubv2InputSource#tf_state_file_url}. |

---

##### `cfnStackArn`<sup>Optional</sup> <a name="cfnStackArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.cfnStackArn"></a>

```typescript
public readonly cfnStackArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#cfn_stack_arn Resiliencehubv2InputSource#cfn_stack_arn}.

---

##### `designFileS3Url`<sup>Optional</sup> <a name="designFileS3Url" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.designFileS3Url"></a>

```typescript
public readonly designFileS3Url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#design_file_s3_url Resiliencehubv2InputSource#design_file_s3_url}.

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.eks"></a>

```typescript
public readonly eks: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>[]

eks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#eks Resiliencehubv2InputSource#eks}

---

##### `resourceTag`<sup>Optional</sup> <a name="resourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.resourceTag"></a>

```typescript
public readonly resourceTag: IResolvable | Resiliencehubv2InputSourceResourceConfigurationResourceTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>[]

resource_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#resource_tag Resiliencehubv2InputSource#resource_tag}

---

##### `tfStateFileUrl`<sup>Optional</sup> <a name="tfStateFileUrl" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.tfStateFileUrl"></a>

```typescript
public readonly tfStateFileUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#tf_state_file_url Resiliencehubv2InputSource#tf_state_file_url}.

---

### Resiliencehubv2InputSourceResourceConfigurationEks <a name="Resiliencehubv2InputSourceResourceConfigurationEks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

const resiliencehubv2InputSourceResourceConfigurationEks: resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.clusterArn">clusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#cluster_arn Resiliencehubv2InputSource#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.namespaces">namespaces</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#namespaces Resiliencehubv2InputSource#namespaces}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.labelSelector">labelSelector</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector</a>[]</code> | label_selector block. |

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#cluster_arn Resiliencehubv2InputSource#cluster_arn}.

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#namespaces Resiliencehubv2InputSource#namespaces}.

---

##### `labelSelector`<sup>Optional</sup> <a name="labelSelector" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.labelSelector"></a>

```typescript
public readonly labelSelector: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector</a>[]

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#label_selector Resiliencehubv2InputSource#label_selector}

---

### Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector <a name="Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

const resiliencehubv2InputSourceResourceConfigurationEksLabelSelector: resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#match_labels Resiliencehubv2InputSource#match_labels}. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#match_expressions Resiliencehubv2InputSource#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#match_labels Resiliencehubv2InputSource#match_labels}.

---

### Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions <a name="Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

const resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions: resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#key Resiliencehubv2InputSource#key}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#operator Resiliencehubv2InputSource#operator}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#values Resiliencehubv2InputSource#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#key Resiliencehubv2InputSource#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#operator Resiliencehubv2InputSource#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#values Resiliencehubv2InputSource#values}.

---

### Resiliencehubv2InputSourceResourceConfigurationResourceTag <a name="Resiliencehubv2InputSourceResourceConfigurationResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

const resiliencehubv2InputSourceResourceConfigurationResourceTag: resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#key Resiliencehubv2InputSource#key}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#values Resiliencehubv2InputSource#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#key Resiliencehubv2InputSource#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/resiliencehubv2_input_source#values Resiliencehubv2InputSource#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList <a name="Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.get"></a>

```typescript
public get(index: number): Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector</a>[]

---


### Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList <a name="Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions</a>[]

---


### Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions</a>

---


### Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector</a>

---


### Resiliencehubv2InputSourceResourceConfigurationEksList <a name="Resiliencehubv2InputSourceResourceConfigurationEksList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.get"></a>

```typescript
public get(index: number): Resiliencehubv2InputSourceResourceConfigurationEksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>[]

---


### Resiliencehubv2InputSourceResourceConfigurationEksOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationEksOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.putLabelSelector">putLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resetLabelSelector">resetLabelSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelSelector` <a name="putLabelSelector" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.putLabelSelector"></a>

```typescript
public putLabelSelector(value: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.putLabelSelector.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector</a>[]

---

##### `resetLabelSelector` <a name="resetLabelSelector" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resetLabelSelector"></a>

```typescript
public resetLabelSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.labelSelector">labelSelector</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespaces">namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.labelSelector"></a>

```typescript
public readonly labelSelector: Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList;
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelectorList</a>

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.labelSelectorInput"></a>

```typescript
public readonly labelSelectorInput: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector">Resiliencehubv2InputSourceResourceConfigurationEksLabelSelector</a>[]

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespacesInput"></a>

```typescript
public readonly namespacesInput: string[];
```

- *Type:* string[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>

---


### Resiliencehubv2InputSourceResourceConfigurationList <a name="Resiliencehubv2InputSourceResourceConfigurationList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.get"></a>

```typescript
public get(index: number): Resiliencehubv2InputSourceResourceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2InputSourceResourceConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>[]

---


### Resiliencehubv2InputSourceResourceConfigurationOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putEks">putEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putResourceTag">putResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetCfnStackArn">resetCfnStackArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetDesignFileS3Url">resetDesignFileS3Url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetEks">resetEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetResourceTag">resetResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetTfStateFileUrl">resetTfStateFileUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEks` <a name="putEks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putEks"></a>

```typescript
public putEks(value: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putEks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>[]

---

##### `putResourceTag` <a name="putResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putResourceTag"></a>

```typescript
public putResourceTag(value: IResolvable | Resiliencehubv2InputSourceResourceConfigurationResourceTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putResourceTag.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>[]

---

##### `resetCfnStackArn` <a name="resetCfnStackArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetCfnStackArn"></a>

```typescript
public resetCfnStackArn(): void
```

##### `resetDesignFileS3Url` <a name="resetDesignFileS3Url" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetDesignFileS3Url"></a>

```typescript
public resetDesignFileS3Url(): void
```

##### `resetEks` <a name="resetEks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetEks"></a>

```typescript
public resetEks(): void
```

##### `resetResourceTag` <a name="resetResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetResourceTag"></a>

```typescript
public resetResourceTag(): void
```

##### `resetTfStateFileUrl` <a name="resetTfStateFileUrl" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetTfStateFileUrl"></a>

```typescript
public resetTfStateFileUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList">Resiliencehubv2InputSourceResourceConfigurationEksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTag">resourceTag</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList">Resiliencehubv2InputSourceResourceConfigurationResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArnInput">cfnStackArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3UrlInput">designFileS3UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eksInput">eksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTagInput">resourceTagInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrlInput">tfStateFileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArn">cfnStackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3Url">designFileS3Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrl">tfStateFileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eks`<sup>Required</sup> <a name="eks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eks"></a>

```typescript
public readonly eks: Resiliencehubv2InputSourceResourceConfigurationEksList;
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList">Resiliencehubv2InputSourceResourceConfigurationEksList</a>

---

##### `resourceTag`<sup>Required</sup> <a name="resourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTag"></a>

```typescript
public readonly resourceTag: Resiliencehubv2InputSourceResourceConfigurationResourceTagList;
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList">Resiliencehubv2InputSourceResourceConfigurationResourceTagList</a>

---

##### `cfnStackArnInput`<sup>Optional</sup> <a name="cfnStackArnInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArnInput"></a>

```typescript
public readonly cfnStackArnInput: string;
```

- *Type:* string

---

##### `designFileS3UrlInput`<sup>Optional</sup> <a name="designFileS3UrlInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3UrlInput"></a>

```typescript
public readonly designFileS3UrlInput: string;
```

- *Type:* string

---

##### `eksInput`<sup>Optional</sup> <a name="eksInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eksInput"></a>

```typescript
public readonly eksInput: IResolvable | Resiliencehubv2InputSourceResourceConfigurationEks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>[]

---

##### `resourceTagInput`<sup>Optional</sup> <a name="resourceTagInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTagInput"></a>

```typescript
public readonly resourceTagInput: IResolvable | Resiliencehubv2InputSourceResourceConfigurationResourceTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>[]

---

##### `tfStateFileUrlInput`<sup>Optional</sup> <a name="tfStateFileUrlInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrlInput"></a>

```typescript
public readonly tfStateFileUrlInput: string;
```

- *Type:* string

---

##### `cfnStackArn`<sup>Required</sup> <a name="cfnStackArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArn"></a>

```typescript
public readonly cfnStackArn: string;
```

- *Type:* string

---

##### `designFileS3Url`<sup>Required</sup> <a name="designFileS3Url" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3Url"></a>

```typescript
public readonly designFileS3Url: string;
```

- *Type:* string

---

##### `tfStateFileUrl`<sup>Required</sup> <a name="tfStateFileUrl" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrl"></a>

```typescript
public readonly tfStateFileUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2InputSourceResourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>

---


### Resiliencehubv2InputSourceResourceConfigurationResourceTagList <a name="Resiliencehubv2InputSourceResourceConfigurationResourceTagList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.get"></a>

```typescript
public get(index: number): Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2InputSourceResourceConfigurationResourceTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>[]

---


### Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2InputSource } from '@cdktn/provider-aws'

new resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2InputSourceResourceConfigurationResourceTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>

---



