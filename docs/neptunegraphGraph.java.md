# `neptunegraphGraph` Submodule <a name="`neptunegraphGraph` Submodule" id="@cdktn/provider-aws.neptunegraphGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphGraph <a name="NeptunegraphGraph" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph aws_neptunegraph_graph}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraph;

NeptunegraphGraph.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .provisionedMemory(java.lang.Number)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .graphName(java.lang.String)
//  .graphNamePrefix(java.lang.String)
//  .kmsKeyIdentifier(java.lang.String)
//  .publicConnectivity(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .replicaCount(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NeptunegraphGraphTimeouts)
//  .vectorSearchConfiguration(IResolvable|java.util.List<NeptunegraphGraphVectorSearchConfiguration>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisionedMemory">provisionedMemory</a></code> | <code>java.lang.Number</code> | The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether the graph has deletion protection enabled. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphName">graphName</a></code> | <code>java.lang.String</code> | The graph name. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphNamePrefix">graphNamePrefix</a></code> | <code>java.lang.String</code> | Allows user to specify name prefix and have remainder of name automatically generated. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | Specifies a KMS key to use to encrypt data in the new graph. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.publicConnectivity">publicConnectivity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether or not the graph can be reachable over the internet. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | The number of replicas in other AZs.  Value must be between 0 and 2. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.vectorSearchConfiguration">vectorSearchConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>></code> | vector_search_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `provisionedMemory`<sup>Required</sup> <a name="provisionedMemory" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisionedMemory"></a>

- *Type:* java.lang.Number

The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether the graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `graphName`<sup>Optional</sup> <a name="graphName" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphName"></a>

- *Type:* java.lang.String

The graph name.

For example: my-graph-1.
The name must contain from 1 to 63 letters, numbers, or hyphens,
and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
If you don't specify a graph name, a unique graph name is generated for you using the prefix graph-for,
followed by a combination of Stack Name and a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `graphNamePrefix`<sup>Optional</sup> <a name="graphNamePrefix" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphNamePrefix"></a>

- *Type:* java.lang.String

Allows user to specify name prefix and have remainder of name automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#graph_name_prefix NeptunegraphGraph#graph_name_prefix}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* java.lang.String

Specifies a KMS key to use to encrypt data in the new graph.

Value must be ARN of KMS Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `publicConnectivity`<sup>Optional</sup> <a name="publicConnectivity" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.publicConnectivity"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether or not the graph can be reachable over the internet.

All access to graphs is IAM authenticated.
When the graph is publicly available, its domain name system (DNS) endpoint resolves to
the public IP address from the internet. When the graph isn't publicly available, you need
to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private
IP address that is reachable from the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#region NeptunegraphGraph#region}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.replicaCount"></a>

- *Type:* java.lang.Number

The number of replicas in other AZs.  Value must be between 0 and 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#timeouts NeptunegraphGraph#timeouts}

---

##### `vectorSearchConfiguration`<sup>Optional</sup> <a name="vectorSearchConfiguration" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.vectorSearchConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>>

vector_search_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration">putVectorSearchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphName">resetGraphName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphNamePrefix">resetGraphNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity">resetPublicConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration">resetVectorSearchConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts"></a>

```java
public void putTimeouts(NeptunegraphGraphTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>

---

##### `putVectorSearchConfiguration` <a name="putVectorSearchConfiguration" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration"></a>

```java
public void putVectorSearchConfiguration(IResolvable|java.util.List<NeptunegraphGraphVectorSearchConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetGraphName` <a name="resetGraphName" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphName"></a>

```java
public void resetGraphName()
```

##### `resetGraphNamePrefix` <a name="resetGraphNamePrefix" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphNamePrefix"></a>

```java
public void resetGraphNamePrefix()
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier"></a>

```java
public void resetKmsKeyIdentifier()
```

##### `resetPublicConnectivity` <a name="resetPublicConnectivity" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity"></a>

```java
public void resetPublicConnectivity()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount"></a>

```java
public void resetReplicaCount()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVectorSearchConfiguration` <a name="resetVectorSearchConfiguration" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration"></a>

```java
public void resetVectorSearchConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NeptunegraphGraph resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.isConstruct"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraph;

NeptunegraphGraph.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraph;

NeptunegraphGraph.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraph;

NeptunegraphGraph.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraph;

NeptunegraphGraph.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NeptunegraphGraph.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NeptunegraphGraph resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NeptunegraphGraph to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NeptunegraphGraph that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NeptunegraphGraph to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference">NeptunegraphGraphTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration">vectorSearchConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList">NeptunegraphGraphVectorSearchConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput">graphNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefixInput">graphNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput">provisionedMemoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput">publicConnectivityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput">replicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput">vectorSearchConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphName">graphName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefix">graphNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory">provisionedMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity">publicConnectivity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeouts"></a>

```java
public NeptunegraphGraphTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference">NeptunegraphGraphTimeoutsOutputReference</a>

---

##### `vectorSearchConfiguration`<sup>Required</sup> <a name="vectorSearchConfiguration" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration"></a>

```java
public NeptunegraphGraphVectorSearchConfigurationList getVectorSearchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList">NeptunegraphGraphVectorSearchConfigurationList</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `graphNameInput`<sup>Optional</sup> <a name="graphNameInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput"></a>

```java
public java.lang.String getGraphNameInput();
```

- *Type:* java.lang.String

---

##### `graphNamePrefixInput`<sup>Optional</sup> <a name="graphNamePrefixInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefixInput"></a>

```java
public java.lang.String getGraphNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput"></a>

```java
public java.lang.String getKmsKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `provisionedMemoryInput`<sup>Optional</sup> <a name="provisionedMemoryInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput"></a>

```java
public java.lang.Number getProvisionedMemoryInput();
```

- *Type:* java.lang.Number

---

##### `publicConnectivityInput`<sup>Optional</sup> <a name="publicConnectivityInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicConnectivityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput"></a>

```java
public java.lang.Number getReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeoutsInput"></a>

```java
public IResolvable|NeptunegraphGraphTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>

---

##### `vectorSearchConfigurationInput`<sup>Optional</sup> <a name="vectorSearchConfigurationInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput"></a>

```java
public IResolvable|java.util.List<NeptunegraphGraphVectorSearchConfiguration> getVectorSearchConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `graphName`<sup>Required</sup> <a name="graphName" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphName"></a>

```java
public java.lang.String getGraphName();
```

- *Type:* java.lang.String

---

##### `graphNamePrefix`<sup>Required</sup> <a name="graphNamePrefix" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefix"></a>

```java
public java.lang.String getGraphNamePrefix();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `provisionedMemory`<sup>Required</sup> <a name="provisionedMemory" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory"></a>

```java
public java.lang.Number getProvisionedMemory();
```

- *Type:* java.lang.Number

---

##### `publicConnectivity`<sup>Required</sup> <a name="publicConnectivity" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity"></a>

```java
public java.lang.Boolean|IResolvable getPublicConnectivity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphGraphConfig <a name="NeptunegraphGraphConfig" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraphConfig;

NeptunegraphGraphConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .provisionedMemory(java.lang.Number)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .graphName(java.lang.String)
//  .graphNamePrefix(java.lang.String)
//  .kmsKeyIdentifier(java.lang.String)
//  .publicConnectivity(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .replicaCount(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NeptunegraphGraphTimeouts)
//  .vectorSearchConfiguration(IResolvable|java.util.List<NeptunegraphGraphVectorSearchConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory">provisionedMemory</a></code> | <code>java.lang.Number</code> | The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether the graph has deletion protection enabled. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName">graphName</a></code> | <code>java.lang.String</code> | The graph name. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphNamePrefix">graphNamePrefix</a></code> | <code>java.lang.String</code> | Allows user to specify name prefix and have remainder of name automatically generated. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | Specifies a KMS key to use to encrypt data in the new graph. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity">publicConnectivity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether or not the graph can be reachable over the internet. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | The number of replicas in other AZs.  Value must be between 0 and 2. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration">vectorSearchConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>></code> | vector_search_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `provisionedMemory`<sup>Required</sup> <a name="provisionedMemory" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory"></a>

```java
public java.lang.Number getProvisionedMemory();
```

- *Type:* java.lang.Number

The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether the graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `graphName`<sup>Optional</sup> <a name="graphName" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName"></a>

```java
public java.lang.String getGraphName();
```

- *Type:* java.lang.String

The graph name.

For example: my-graph-1.
The name must contain from 1 to 63 letters, numbers, or hyphens,
and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
If you don't specify a graph name, a unique graph name is generated for you using the prefix graph-for,
followed by a combination of Stack Name and a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `graphNamePrefix`<sup>Optional</sup> <a name="graphNamePrefix" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphNamePrefix"></a>

```java
public java.lang.String getGraphNamePrefix();
```

- *Type:* java.lang.String

Allows user to specify name prefix and have remainder of name automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#graph_name_prefix NeptunegraphGraph#graph_name_prefix}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

Specifies a KMS key to use to encrypt data in the new graph.

Value must be ARN of KMS Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `publicConnectivity`<sup>Optional</sup> <a name="publicConnectivity" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity"></a>

```java
public java.lang.Boolean|IResolvable getPublicConnectivity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether or not the graph can be reachable over the internet.

All access to graphs is IAM authenticated.
When the graph is publicly available, its domain name system (DNS) endpoint resolves to
the public IP address from the internet. When the graph isn't publicly available, you need
to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private
IP address that is reachable from the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#region NeptunegraphGraph#region}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

The number of replicas in other AZs.  Value must be between 0 and 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.timeouts"></a>

```java
public NeptunegraphGraphTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#timeouts NeptunegraphGraph#timeouts}

---

##### `vectorSearchConfiguration`<sup>Optional</sup> <a name="vectorSearchConfiguration" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration"></a>

```java
public IResolvable|java.util.List<NeptunegraphGraphVectorSearchConfiguration> getVectorSearchConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>>

vector_search_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

### NeptunegraphGraphTimeouts <a name="NeptunegraphGraphTimeouts" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraphTimeouts;

NeptunegraphGraphTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#create NeptunegraphGraph#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#delete NeptunegraphGraph#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#update NeptunegraphGraph#update}

---

### NeptunegraphGraphVectorSearchConfiguration <a name="NeptunegraphGraphVectorSearchConfiguration" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraphVectorSearchConfiguration;

NeptunegraphGraphVectorSearchConfiguration.builder()
//  .vectorSearchDimension(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension">vectorSearchDimension</a></code> | <code>java.lang.Number</code> | Specifies the number of dimensions for vector embeddings.  Value must be between 1 and 65,535. |

---

##### `vectorSearchDimension`<sup>Optional</sup> <a name="vectorSearchDimension" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension"></a>

```java
public java.lang.Number getVectorSearchDimension();
```

- *Type:* java.lang.Number

Specifies the number of dimensions for vector embeddings.  Value must be between 1 and 65,535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/neptunegraph_graph#vector_search_dimension NeptunegraphGraph#vector_search_dimension}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptunegraphGraphTimeoutsOutputReference <a name="NeptunegraphGraphTimeoutsOutputReference" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraphTimeoutsOutputReference;

new NeptunegraphGraphTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NeptunegraphGraphTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>

---


### NeptunegraphGraphVectorSearchConfigurationList <a name="NeptunegraphGraphVectorSearchConfigurationList" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraphVectorSearchConfigurationList;

new NeptunegraphGraphVectorSearchConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.get"></a>

```java
public NeptunegraphGraphVectorSearchConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NeptunegraphGraphVectorSearchConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>>

---


### NeptunegraphGraphVectorSearchConfigurationOutputReference <a name="NeptunegraphGraphVectorSearchConfigurationOutputReference" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.neptunegraph_graph.NeptunegraphGraphVectorSearchConfigurationOutputReference;

new NeptunegraphGraphVectorSearchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension">resetVectorSearchDimension</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVectorSearchDimension` <a name="resetVectorSearchDimension" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension"></a>

```java
public void resetVectorSearchDimension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput">vectorSearchDimensionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension">vectorSearchDimension</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vectorSearchDimensionInput`<sup>Optional</sup> <a name="vectorSearchDimensionInput" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput"></a>

```java
public java.lang.Number getVectorSearchDimensionInput();
```

- *Type:* java.lang.Number

---

##### `vectorSearchDimension`<sup>Required</sup> <a name="vectorSearchDimension" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension"></a>

```java
public java.lang.Number getVectorSearchDimension();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NeptunegraphGraphVectorSearchConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

---



