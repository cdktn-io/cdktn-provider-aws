# `sagemakerModelCardExportJob` Submodule <a name="`sagemakerModelCardExportJob` Submodule" id="@cdktn/provider-aws.sagemakerModelCardExportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModelCardExportJob <a name="SagemakerModelCardExportJob" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job aws_sagemaker_model_card_export_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

new sagemakerModelCardExportJob.SagemakerModelCardExportJob(scope: Construct, id: string, config: SagemakerModelCardExportJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig">SagemakerModelCardExportJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig">SagemakerModelCardExportJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetModelCardVersion">resetModelCardVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetOutputConfig">resetOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putOutputConfig"></a>

```typescript
public putOutputConfig(value: IResolvable | SagemakerModelCardExportJobOutputConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putOutputConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putTimeouts"></a>

```typescript
public putTimeouts(value: SagemakerModelCardExportJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a>

---

##### `resetModelCardVersion` <a name="resetModelCardVersion" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetModelCardVersion"></a>

```typescript
public resetModelCardVersion(): void
```

##### `resetOutputConfig` <a name="resetOutputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetOutputConfig"></a>

```typescript
public resetOutputConfig(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerModelCardExportJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isConstruct"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

sagemakerModelCardExportJob.SagemakerModelCardExportJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformElement"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformResource"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SagemakerModelCardExportJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerModelCardExportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerModelCardExportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerModelCardExportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.exportArtifacts">exportArtifacts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList">SagemakerModelCardExportJobExportArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobArn">modelCardExportJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList">SagemakerModelCardExportJobOutputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference">SagemakerModelCardExportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobNameInput">modelCardExportJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardNameInput">modelCardNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardVersionInput">modelCardVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.outputConfigInput">outputConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobName">modelCardExportJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardName">modelCardName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardVersion">modelCardVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportArtifacts`<sup>Required</sup> <a name="exportArtifacts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.exportArtifacts"></a>

```typescript
public readonly exportArtifacts: SagemakerModelCardExportJobExportArtifactsList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList">SagemakerModelCardExportJobExportArtifactsList</a>

---

##### `modelCardExportJobArn`<sup>Required</sup> <a name="modelCardExportJobArn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobArn"></a>

```typescript
public readonly modelCardExportJobArn: string;
```

- *Type:* string

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.outputConfig"></a>

```typescript
public readonly outputConfig: SagemakerModelCardExportJobOutputConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList">SagemakerModelCardExportJobOutputConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.timeouts"></a>

```typescript
public readonly timeouts: SagemakerModelCardExportJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference">SagemakerModelCardExportJobTimeoutsOutputReference</a>

---

##### `modelCardExportJobNameInput`<sup>Optional</sup> <a name="modelCardExportJobNameInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobNameInput"></a>

```typescript
public readonly modelCardExportJobNameInput: string;
```

- *Type:* string

---

##### `modelCardNameInput`<sup>Optional</sup> <a name="modelCardNameInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardNameInput"></a>

```typescript
public readonly modelCardNameInput: string;
```

- *Type:* string

---

##### `modelCardVersionInput`<sup>Optional</sup> <a name="modelCardVersionInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardVersionInput"></a>

```typescript
public readonly modelCardVersionInput: number;
```

- *Type:* number

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.outputConfigInput"></a>

```typescript
public readonly outputConfigInput: IResolvable | SagemakerModelCardExportJobOutputConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SagemakerModelCardExportJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a>

---

##### `modelCardExportJobName`<sup>Required</sup> <a name="modelCardExportJobName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobName"></a>

```typescript
public readonly modelCardExportJobName: string;
```

- *Type:* string

---

##### `modelCardName`<sup>Required</sup> <a name="modelCardName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardName"></a>

```typescript
public readonly modelCardName: string;
```

- *Type:* string

---

##### `modelCardVersion`<sup>Required</sup> <a name="modelCardVersion" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardVersion"></a>

```typescript
public readonly modelCardVersion: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelCardExportJobConfig <a name="SagemakerModelCardExportJobConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.Initializer"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

const sagemakerModelCardExportJobConfig: sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardExportJobName">modelCardExportJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#model_card_export_job_name SagemakerModelCardExportJob#model_card_export_job_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardName">modelCardName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#model_card_name SagemakerModelCardExportJob#model_card_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardVersion">modelCardVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#model_card_version SagemakerModelCardExportJob#model_card_version}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.outputConfig">outputConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>[]</code> | output_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `modelCardExportJobName`<sup>Required</sup> <a name="modelCardExportJobName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardExportJobName"></a>

```typescript
public readonly modelCardExportJobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#model_card_export_job_name SagemakerModelCardExportJob#model_card_export_job_name}.

---

##### `modelCardName`<sup>Required</sup> <a name="modelCardName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardName"></a>

```typescript
public readonly modelCardName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#model_card_name SagemakerModelCardExportJob#model_card_name}.

---

##### `modelCardVersion`<sup>Optional</sup> <a name="modelCardVersion" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardVersion"></a>

```typescript
public readonly modelCardVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#model_card_version SagemakerModelCardExportJob#model_card_version}.

---

##### `outputConfig`<sup>Optional</sup> <a name="outputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.outputConfig"></a>

```typescript
public readonly outputConfig: IResolvable | SagemakerModelCardExportJobOutputConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>[]

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#output_config SagemakerModelCardExportJob#output_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#region SagemakerModelCardExportJob#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SagemakerModelCardExportJobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#timeouts SagemakerModelCardExportJob#timeouts}

---

### SagemakerModelCardExportJobExportArtifacts <a name="SagemakerModelCardExportJobExportArtifacts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifacts.Initializer"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

const sagemakerModelCardExportJobExportArtifacts: sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifacts = { ... }
```


### SagemakerModelCardExportJobOutputConfig <a name="SagemakerModelCardExportJobOutputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig.Initializer"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

const sagemakerModelCardExportJobOutputConfig: sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#s3_output_path SagemakerModelCardExportJob#s3_output_path}. |

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#s3_output_path SagemakerModelCardExportJob#s3_output_path}.

---

### SagemakerModelCardExportJobTimeouts <a name="SagemakerModelCardExportJobTimeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts.Initializer"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

const sagemakerModelCardExportJobTimeouts: sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_model_card_export_job#create SagemakerModelCardExportJob#create}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelCardExportJobExportArtifactsList <a name="SagemakerModelCardExportJobExportArtifactsList" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

new sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.get"></a>

```typescript
public get(index: number): SagemakerModelCardExportJobExportArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SagemakerModelCardExportJobExportArtifactsOutputReference <a name="SagemakerModelCardExportJobExportArtifactsOutputReference" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

new sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.s3ExportArtifacts">s3ExportArtifacts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifacts">SagemakerModelCardExportJobExportArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3ExportArtifacts`<sup>Required</sup> <a name="s3ExportArtifacts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.s3ExportArtifacts"></a>

```typescript
public readonly s3ExportArtifacts: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerModelCardExportJobExportArtifacts;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifacts">SagemakerModelCardExportJobExportArtifacts</a>

---


### SagemakerModelCardExportJobOutputConfigList <a name="SagemakerModelCardExportJobOutputConfigList" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

new sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.get"></a>

```typescript
public get(index: number): SagemakerModelCardExportJobOutputConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerModelCardExportJobOutputConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>[]

---


### SagemakerModelCardExportJobOutputConfigOutputReference <a name="SagemakerModelCardExportJobOutputConfigOutputReference" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

new sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.s3OutputPathInput"></a>

```typescript
public readonly s3OutputPathInput: string;
```

- *Type:* string

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerModelCardExportJobOutputConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>

---


### SagemakerModelCardExportJobTimeoutsOutputReference <a name="SagemakerModelCardExportJobTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { sagemakerModelCardExportJob } from '@cdktn/provider-aws'

new sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerModelCardExportJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a>

---



